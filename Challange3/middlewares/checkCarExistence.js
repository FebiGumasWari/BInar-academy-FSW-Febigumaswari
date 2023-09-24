const fs = require("fs");

function checkCarExistence(req, res, next) {
  const id = req.params.id;
  const carsFilePath = `${__dirname}/../data/cars.json`; 
  const cars = JSON.parse(fs.readFileSync(carsFilePath));
  const carIndex = cars.findIndex((car) => car.id === id);

  if (carIndex === -1) {
    return res.status(404).json({ error: "Mobil tidak ditemukan" });
  }

  req.carIndex = carIndex;
  next();
}

module.exports = checkCarExistence;
