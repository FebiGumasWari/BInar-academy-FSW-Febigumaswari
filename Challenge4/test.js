const { Sequelize } = require("sequelize");

/** @returns {Promise<void>} */
async function testSequelize() {
  const sequelize = new Sequelize("db_cars_dev", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

void testSequelize();
