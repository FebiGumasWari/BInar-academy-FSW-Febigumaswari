const {
  DB_USER = "postgres",
  DB_PASSWORD = "fcce2da6fC122FdfBbgG-E*5EBaA5-eD",
  DB_NAME = "railway",
  DB_HOST = "roundhouse.proxy.rlwy.net",
  DB_PORT = "53936",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  }
}
