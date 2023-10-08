const express = require("express");
const app = express();
const carsController = require("./controllers/carsController");
const checkCarExistence = require("./middlewares/checkCarExistence");

app.use(express.json());

app.get("/", carsController.getRoot);

app.get("/cars", carsController.getCars);

app.get("/cars/:id", checkCarExistence, carsController.getCarById);

app.post("/cars", carsController.createCar);

app.put("/cars/:id", checkCarExistence, carsController.updateCar);

app.delete("/cars/:id", checkCarExistence, carsController.deleteCar);

app.use((req, res) => {
  res.status(404).json({ error: "Tidak Ditemukan" });
});

module.exports = app;
