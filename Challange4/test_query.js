const { Car } = require("./models");

// // Select all data from the "Car" table
Car.findAll()
  .then((data) => {
    // Successful query execution: log the retrieved data
    console.log(data);
  })
  .catch((err) => {
    // Error handling: log the error if an error occurs
    console.error(err);
  });

// 1. Create

// Bikin data satuan

// Car.create({
//   name: "Mobil Kecil 4",
//   type: "small",
//   image: "gambar1.jpg",
//   capacity: 4,
//   rentPerDay: 50.0,
//   description: "Deskripsi mobil kecil 1",
//   availableAt: new Date(),
// })
//   .then((newCar) => {
//     console.log("Data feed baru telah dibuat:", newCar);
//   })
//   .catch((error) => {
//     console.error("Gagal membuat data feed baru:", error);
//   });

// 2. Update data


// const updatedData = {
//   name: "Mobil Kecil 6",
//   type: "small",
//   image: "gambar1.jpg",
//   capacity: 4,
//   rentPerDay: 50.0,
//   description: "Deskripsi mobil kecil 1",
//   availableAt: new Date(),
// };

// const id = "5cdf4775-9f7b-4fec-b8ce-5a81ec904731"; // Gantilah dengan ID yang sesuai

// Car.update(updatedData, {
//   where: {
//     id: id,
//   },
// })
//   .then((result) => {
//     console.log("Updated successfully"), result;
//   })
//   .catch((error) => {
//     console.error("Error updating Feed:", error);
//   });

// 3. Delete feed


// Car.destroy({ where: { id: "5cdf4775-9f7b-4fec-b8ce-5a81ec904731" } })
//   .then(() => console.log("Deleted successfully"))
//   .catch((error) => console.error("Error deleting Car:", error));

