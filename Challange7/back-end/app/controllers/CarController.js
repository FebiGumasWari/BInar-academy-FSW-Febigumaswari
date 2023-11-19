const { Op } = require("sequelize");
const ApplicationController = require("./ApplicationController");

class CarController extends ApplicationController {
  constructor({ carModel, userCarModel, dayjs, CarAlreadyRentedError }) {
    super();
    this.carModel = carModel;
    this.userCarModel = userCarModel;
    this.dayjs = dayjs;
    this.CarAlreadyRentedError = CarAlreadyRentedError;
  }

  handleListCars = async (req, res) => {
    try {
      const query = this.getListQueryFromRequest(req);
      const cars = await this.carModel.findAll(query);
      const carCount = await this.carModel.count({ where: query.where, include: query.include });
      const pagination = this.buildPaginationObject(req, carCount);

      res.status(200).json({
        cars,
        meta: {
          pagination,
        },
      });
    } catch (err) {
      this.handleError(res, err);
    }
  }

  handleGetCar = async (req, res) => {
    try {
      const car = await this.getCarFromRequest(req);
      if (!car) {
        const err = new Error("Car not found");
        err.name = "RecordNotFoundError";
        throw err;
      }
      res.status(200).json(car);
    } catch (err) {
      this.handleError(res, err);
    }
  }

  handleCreateCar = async (req, res) => {
    try {
      const { name, price, size, image } = req.body;
      const car = await this.carModel.create({
        name,
        price,
        size,
        image,
        isCurrentlyRented: false,
      });

      res.status(201).json(car);
    } catch (err) {
      this.handleError(res, err);
    }
  }

  handleRentCar = async (req, res, next) => {
    try {
      let { rentStartedAt, rentEndedAt } = req.body;
      const car = await this.getCarFromRequest(req);

      if (!rentEndedAt) rentEndedAt = this.dayjs(rentStartedAt).add(1, "day");

      const activeRent = await this.userCarModel.findOne({
        where: {
          carId: car.id,
          rentStartedAt: {
            [Op.lt]: rentEndedAt,
          },
          rentEndedAt: {
            [Op.gt]: rentStartedAt,
          },
        },
      });

      if (activeRent) {
        throw new this.CarAlreadyRentedError(car);
      }

      const userCar = await this.userCarModel.create({
        userId: req.user.id,
        carId: car.id,
        rentStartedAt,
        rentEndedAt,
      });

      res.status(201).json(userCar);
    } catch (err) {
      next(err);
    }
  }

  handleUpdateCar = async (req, res) => {
    try {
      const { name, price, size, image } = req.body;
      const car = await this.getCarFromRequest(req);

      if (!car) {
        const err = new Error("Car not found");
        err.name = "RecordNotFoundError";
        throw err;
      }

      await car.update({
        name,
        price,
        size,
        image,
        isCurrentlyRented: false,
      });

      res.status(200).json(car);
    } catch (err) {
      this.handleError(res, err);
    }
  }

  handleDeleteCar = async (req, res) => {
    try {
      await this.carModel.destroy({ where: { id: req.params.id } });
      res.status(204).end();
    } catch (err) {
      this.handleError(res, err);
    }
  }

  getCarFromRequest(req) {
    return this.carModel.findByPk(req.params.id);
  }

  getListQueryFromRequest(req) {
    const { size, availableAt } = req.query;
    const limit = req.query.pageSize || 10;
    const where = {};
    const include = {
      model: this.userCarModel,
      as: "userCar",
      required: false,
    };

    if (size) where.size = size;
    if (availableAt) {
      include.where = {
        rentEndedAt: {
          [Op.gte]: availableAt,
        },
      };
    }

    const query = {
      include,
      where,
      limit,
    };

    return query;
  }
}

module.exports = CarController;
