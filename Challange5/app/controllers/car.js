const  carService  = require("../services/car");

const list = async (req, res) => {
        try{
        const {type} = req.query;

        const data = await carService.listCar(type)

        res.status(200).json({ status: "OK", message: "success", data });
        }catch(error){
        res.status(error.statuscode || 500).json({
          status: "Fail",
          message: error.message,
        });
      }
};



const create = async (req, res) => {
  try {
    const body = req.body;
    const { id: userId } = req.user;
    const data = await carService.create(body, userId);
    res.status(201).json({ status: "OK", message: "Success", data });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const body = req.body;
    const { id: carId } = req.car;
    const { id: userId } = req.user;

    const data = await carService.updateCarById(carId, body, userId);

    res.status(201).json({ status: "OK", message: "Success", data});
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.car.id;
    const { id: userId } = req.user;

    await carService.deleteCarById(id, userId);
    res.json({ status: "OK", message: "successfully deleted" });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const detail = (req, res) => {
  res.json({ status: "OK", message: "success", data: req.car });
};

const findAndSetByid = async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await carService.getCarById(id);
    req.car = car;
    next();
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

module.exports = {
  list,
  create,
  update,
  destroy,
  detail,
  findAndSetByid,
};
