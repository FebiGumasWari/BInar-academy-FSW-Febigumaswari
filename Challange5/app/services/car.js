const carRepository = require('./../repositories/car')
const ApplicationError = require('./../../config/errors/ApplicationError')


exports.listCar = async (type) => {
    try {
        if (type) {
        const cars = await carRepository.getListCarsByType(type);
        return cars;
        }else{
         const cars = await carRepository.getListCars();
         return cars;
        }
    } catch (err){
        throw new ApplicationError(`Failed to get list cars: ${err.message}`, 500);
    }
};

exports.create = async (payload, userId) => {
    try {
      const cars = await carRepository.createCar(payload, userId);
      return cars;

    } catch (error) {
      throw new ApplicationError(`Failed to add new Cars: ${err.message}`, 500);
    }
  };

  exports.getCarById = async (id) => {
    try {
      const car = await carRepository.findByPk(id);
      if (!car) {
        throw new ApplicationError("Car not found", 404);
      }
      return car;
    } catch (err) {
      throw new ApplicationError(`Failed to get car by ID: ${err.message}`, 500);
    }
  };

  exports.updateCarById = async (id, payload,userId) => {
    try {
      const [_, data] = await carRepository.update(id, payload, userId);
      return data;
    } catch (err) {
      throw new ApplicationError(`Failed to updated car by ID: ${err.message}`, 500);
    }
  };

  exports.deleteCarById = async (id,userId) => {
    try {
     const cars =  await carRepository.destory(id);
     return carRepository.update(id, {deletedBy: userId}, userId)
    } catch (err) {
      throw new ApplicationError(`Failed to delete car by ID: ${err.message}`, 500);
    }
  };