const { Op } = require("sequelize");
const CarController = require("./CarController");

describe("CarController", () => {
  let carController;
  let mockCarModel;
  let mockUserCarModel;
  let mockDayjs;
  let mockCarAlreadyRentedError;
  let req;
  let res;
  let next;

  beforeEach(() => {
    mockCarModel = {
      findAll: jest.fn(),
      count: jest.fn(),
      create: jest.fn(),
      findByPk: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };

    mockUserCarModel = {
      findOne: jest.fn(),
      create: jest.fn(),
    };

    mockDayjs = jest.fn();

    mockCarAlreadyRentedError = jest.fn();

    carController = new CarController({
      carModel: mockCarModel,
      userCarModel: mockUserCarModel,
      dayjs: mockDayjs,
      CarAlreadyRentedError: mockCarAlreadyRentedError,
    });

    req = {
      params: { id: 1 },
      query: {},
      body: {},
      user: { id: 1 },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    next = jest.fn();
  });

  describe("handleListCars", () => {
    it("should handle listing cars successfully", async () => {
      // Mock expected query for findAll
      const expectedQuery = {
        include: {
          as: "userCar",
          model: {
            create: jest.fn(), 
            findOne: jest.fn(), 
          },
          required: false,
        },
        limit: 10,
        where: {}, 
      };
      
      mockCarModel.findAll.mockResolvedValueOnce([{ id: 1, name: "Car 1" }]);
      mockCarModel.count.mockResolvedValueOnce(1);

      await carController.handleListCars(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        cars: [{ id: 1, name: "Car 1" }],
        meta: { pagination: { count: 1, page: 1, pageCount: 1, pageSize: 10 } },
      });
    });

 
  });

  describe("handleGetCar", () => {
    it("should handle getting a car successfully", async () => {
      const car = { id: 1, name: "Car 1" };
      mockCarModel.findByPk.mockResolvedValueOnce(car);

      await carController.handleGetCar(req, res);

      expect(mockCarModel.findByPk).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(car);
    });

  });

  describe("handleCreateCar", () => {
    it("should handle creating a car successfully", async () => {
      const carData = {
        name: "Car 1",
        price: 100,
        size: "Medium",
        image: "car.jpg",
      };
      const createdCar = { id: 1, ...carData, isCurrentlyRented: false };
      mockCarModel.create.mockResolvedValueOnce(createdCar);

      req.body = carData;

      await carController.handleCreateCar(req, res);

      expect(mockCarModel.create).toHaveBeenCalledWith({
        name: "Car 1",
        price: 100,
        size: "Medium",
        image: "car.jpg",
        isCurrentlyRented: false,
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(createdCar);
    });


  });

  describe("handleRentCar", () => {
    it("should handle renting a car successfully", async () => {
      const car = { id: 1, name: "Car 1" };
      const userCarData = {
        userId: 1,
        carId: 1,
        rentStartedAt: "2023-01-01",
        rentEndedAt: "2023-01-02",
      };
      const rentedCar = { id: 1, ...userCarData };
      mockCarModel.findByPk.mockResolvedValueOnce(car);
      mockUserCarModel.findOne.mockResolvedValueOnce(null);
      mockDayjs.mockReturnValueOnce({
        add: jest.fn().mockReturnValueOnce({ format: jest.fn().mockReturnValueOnce("2023-01-02") }),
      });
      mockUserCarModel.create.mockResolvedValueOnce(rentedCar);

      req.body = { rentStartedAt: "2023-01-01" };

      await carController.handleRentCar(req, res, next);

      expect(mockCarModel.findByPk).toHaveBeenCalledWith(1);
   

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(rentedCar);
    });

    it("should handle car already rented in handleRentCar", async () => {
      const car = { id: 1, name: "Car 1" };
      mockCarModel.findByPk.mockResolvedValueOnce(car);
      mockUserCarModel.findOne.mockResolvedValueOnce({ id: 1 });

      req.body = { rentStartedAt: "2023-01-01" };

      await carController.handleRentCar(req, res, next);

    });

  });

  describe("handleUpdateCar", () => {
    it("should handle updating a car successfully", async () => {
      const car = { id: 1, name: "Car 1", update: jest.fn() };
      mockCarModel.findByPk.mockResolvedValueOnce(car);

      req.body = {
        name: "Updated Car 1",
        price: 150,
        size: "Large",
        image: "updated-car.jpg",
      };

      await carController.handleUpdateCar(req, res);

      expect(car.update).toHaveBeenCalledWith({
        name: "Updated Car 1",
        price: 150,
        size: "Large",
        image: "updated-car.jpg",
        isCurrentlyRented: false,
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(car);
    });

  });

  

  describe("getCarFromRequest", () => {
    it("should get car from request successfully", async () => {
      const car = { id: 1, name: "Car 1" };
      mockCarModel.findByPk.mockResolvedValueOnce(car);

      const result = await carController.getCarFromRequest(req);

      expect(mockCarModel.findByPk).toHaveBeenCalledWith(1);
      expect(result).toEqual(car);
    });
  });

  describe("getListQueryFromRequest", () => {
    it("should get list query from request successfully", async () => {
      req.query = { size: "Medium", availableAt: "2023-01-01", pageSize: 20 };

      const result = carController.getListQueryFromRequest(req);

      expect(result).toEqual({
        include: {
          model: mockUserCarModel,
          as: "userCar",
          required: false,
          where: {
            rentEndedAt: { [Op.gte]: "2023-01-01" },
          },
        },
        where: { size: "Medium" },
        limit: 20,
      });
    });
  });
});
