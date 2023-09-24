const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Definisikan carsFilePath di sini sebagai variabel global
const carsFilePath = `${__dirname}/../data/cars.json`;

function readCarsFromFile() {
  return JSON.parse(fs.readFileSync(carsFilePath));
}

function writeCarsToFileIfChanged(carsData) {
  const currentData = readCarsFromFile();
  if (JSON.stringify(currentData) !== JSON.stringify(carsData)) {
    fs.writeFileSync(carsFilePath, JSON.stringify(carsData, null, 2));
  }
}

exports.getRoot = (req, res) => {
  res.json({ message: "Ping successfully" });
};

exports.getCars = (req, res) => {
  const cars = readCarsFromFile();
  const requiredFields = [
    "id",
    "image",
    "capacity",
    "rentPerDay",
    "description",
    "availableAt",
  ];

  const simplifiedCars = cars.map((car) => {
    return requiredFields.reduce((simplifiedCar, field) => {
      simplifiedCar[field] = car[field];
      return simplifiedCar;
    }, {});
  });

  res.json({ status: "success", data: simplifiedCars });
};

exports.getCarById = (req, res) => {
  const cars = readCarsFromFile();
  const car = cars[req.carIndex];

  const requiredFields = [
    "id",
    "image",
    "capacity",
    "rentPerDay",
    "description",
    "availableAt",
  ];

  const simplifiedCar = requiredFields.reduce((simplifiedCar, field) => {
    simplifiedCar[field] = car[field];
    return simplifiedCar;
  }, {});

  res.json({ data: simplifiedCar });
};

exports.createCar = (req, res) => {
  const newCarData = req.body;
  const requiredFields = [
    "image",
    "capacity",
    "rentPerDay",
    "description",
    "availableAt",
  ];

  const newCarId = uuidv4();

  if (requiredFields.some((field) => !newCarData[field])) {
    return res.status(400).json({
      error: "Data tidak lengkap. Mohon berikan semua bidang yang diperlukan.",
    });
  }

  const cars = readCarsFromFile();
  const newCar = {
    id: newCarId,
    ...newCarData,
  };

  cars.push(newCar);
  writeCarsToFileIfChanged(cars);

  res.status(201).json({ message: "Data Mobil berhasil dibuat", newCar });
};

exports.updateCar = (req, res) => {
  const id = req.params.id;
  const updatedCarData = req.body;

  const requiredFields = [
    "image",
    "capacity",
    "rentPerDay",
    "description",
    "availableAt",
  ];

  if (requiredFields.some((field) => !updatedCarData[field])) {
    return res.status(400).json({
      error: "Data tidak lengkap. Mohon berikan semua bidang yang diperlukan.",
    });
  }

  if (id !== updatedCarData.id) {
    return res.status(400).json({
      error: "ID tidak dapat diubah.",
    });
  }

  const cars = readCarsFromFile();
  const index = req.carIndex;

  const updatedCar = {
    ...updatedCarData,
    id,
  };

  cars[index] = updatedCar;

  writeCarsToFileIfChanged(cars);
  res.json({ message: "Mobil berhasil diperbarui", updatedCar });
};

exports.deleteCar = (req, res) => {
  const cars = readCarsFromFile();
  const index = req.carIndex;

  cars.splice(index, 1);
  writeCarsToFileIfChanged(cars);

  res.json({ status: "Berhasil dihapus" });
};
