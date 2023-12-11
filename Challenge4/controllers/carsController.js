const { Car } = require("../models");

exports.getRoot = (req, res) => {
  res.json({ message: "Ping successfully" });
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json({ status: "success", data: cars });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kesalahan Server Internal" });
  }
};

exports.getCarById = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ message: "Mobil tidak ditemukan" });
    }
    res.json({ data: car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kesalahan Server Internal" });
  }
};

exports.createCar = async (req, res) => {
  const newCarData = req.body;

  // Memeriksa properti-properti tambahan yang tidak dikenali
  const unknownProperty = {
    message: "Properti tidak dikenali: " + Object.keys(newCarData).join(", "),
  };

  // Validasi tipe data
  if ("capacity" in newCarData && isNaN(newCarData.capacity)) {
    return res
      .status(400)
      .json({ message: "Properti capacity harus berupa angka, bisa pakai string" });
  }

  if (
    "type" in newCarData &&
    !["small", "medium", "large"].includes(newCarData.type)
  ) {
    return res
      .status(400)
      .json({
        message: "Properti type harus salah satu dari small, medium, large",
      });
  }

  if (
    "availableAt" in newCarData &&
    isNaN(Date.parse(newCarData.availableAt))
  ) {
    return res
      .status(400)
      .json({
        message: "Properti availableAt harus berupa tanggal yang valid",
      });
  }

  // Memeriksa properti-properti yang tidak dikenali
  const allowedProperties = [
    "name",
    "type",
    "image",
    "capacity",
    "rentPerDay",
    "description",
    "availableAt",
  ];

  for (const property in newCarData) {
    if (!allowedProperties.includes(property)) {
      return res.status(400).json(unknownProperty);
    }
  }

  try {
    const newCar = await Car.create(newCarData);
    res.status(201).json({ message: "Data Mobil berhasil dibuat", newCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kesalahan Server Internal" });
  }
};

exports.updateCar = async (req, res) => {
  const carId = req.params.id;
  const updatedCarData = req.body;

  // Memeriksa properti-properti tambahan yang tidak dikenali
  const unknownProperty = {
    message:
      "Properti tidak dikenali: " + Object.keys(updatedCarData).join(", "),
  };

  // Validasi tipe data
  if ("capacity" in updatedCarData && isNaN(updatedCarData.capacity)) {
    return res
      .status(400)
      .json({ message: "Properti capacity harus berupa angka, bisa pakai string" });
  }

  if (
    "type" in updatedCarData &&
    !["small", "medium", "large"].includes(updatedCarData.type)
  ) {
    return res
      .status(400)
      .json({
        message: "Properti type harus salah satu dari small, medium, large",
      });
  }

  if (
    "availableAt" in updatedCarData &&
    isNaN(Date.parse(updatedCarData.availableAt))
  ) {
    return res
      .status(400)
      .json({
        message: "Properti availableAt harus berupa tanggal yang valid",
      });
  }

  // Memeriksa properti-properti yang tidak dikenali
  const allowedProperties = [
    "name",
    "type",
    "image",
    "capacity",
    "rentPerDay",
    "description",
    "availableAt",
  ];

  for (const property in updatedCarData) {
    if (!allowedProperties.includes(property)) {
      return res.status(400).json(unknownProperty);
    }
  }

  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ message: "Mobil tidak ditemukan" });
    }

    await car.update(updatedCarData);

    res.json({ message: "Mobil berhasil diperbarui", updatedCar: car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kesalahan Server Internal" });
  }
};

exports.deleteCar = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car.findByPk(carId);
    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }

    await car.destroy();

    res.json({ status: "Berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kesalahan Server Internal" });
  }
};
