const express = require("express");
const app = express();
const PORT = 8000;

// Import required controller and middleware modules
const carsController = require("./app/controllers/car");
const userController = require("./app/controllers/user");
const autMiddleware = require("./app/middlewares/auth");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

app.use(express.json()); // Middleware for parsing JSON data in HTTP requests

app.get("/", (req, res) => {
  res.send("Server is connected successfully!");// Home route, provides a simple response when accessed
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// register a new user
app.post("/register", userController.register);

// Login a user
app.post("/Login", userController.login);

// Route to access the list of cars (requires authentication)
app.get("/cars", autMiddleware.authorize,carsController.list);

// Route to access car details by ID (requires authentication)
app.get("/cars/:id", autMiddleware.authorize ,carsController.findAndSetByid , carsController.detail);


// Routes for admin and super admin operations (require authentication and specific roles)

// Create a new car
app.post("/cars",autMiddleware.authorize, autMiddleware.isSuperOrAdmin, carsController.create); 

// Update a car
app.put("/cars/:id",autMiddleware.authorize, autMiddleware.isSuperOrAdmin, carsController.findAndSetByid, carsController.update); 

// Delete a car
app.delete("/cars/:id",autMiddleware.authorize, autMiddleware.isSuperOrAdmin,carsController.findAndSetByid, carsController.destroy); 



// Route to access the current user's information (requires authentication)
app.get('/current/user', autMiddleware.authorize, userController.currentUser)

// Route for registering a new admin (accessible only by super admins)
app.post(
  "/register/admin",
  autMiddleware.authorize,
  autMiddleware.isSuperAdmin,
  userController.registerAdmin
);

// 404 route to handle requests that do not match any of the above routes
app.use('*', (req, res) => {
  res.status(404).json({status: "Fail",
  message: "404 Not Found" });
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Express is running at  http://localhost:${PORT}`);
});
