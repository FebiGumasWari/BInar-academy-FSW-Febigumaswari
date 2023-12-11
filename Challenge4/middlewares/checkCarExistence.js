const { Car } = require("../models");
const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

async function checkCarExistence(req, res, next) {
  const id = req.params.id;

  if (!uuidRegex.test(id)) {
    return res.status(400).json({ error: "ID tidak valid" });
  }

  try {
    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }

    req.car = car;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = checkCarExistence;
