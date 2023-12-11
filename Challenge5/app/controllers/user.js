const userService = require('./../services/user');

exports.registerAdmin = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.create(body, true);
    res.status(201).json({
      status: "OK",
      message: "Success",
      data: data
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: "Fail",
      message: `Failed to register admin: ${err.message}`
    });
  }
};

exports.register = async (req, res) => {
  try {
    const body = req.body;
    const data = await userService.create(body);
    res.status(201).json({
      status: "OK",
      message: "Success",
      data: data
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: "Fail",
      message: `Failed to register user: ${err.message}`
    });
  }
};

exports.login = async (req, res) => {
  try {
    const credentials = req.body;
    const user = await userService.checkUser(credentials);
    res.status(200).json({
      status: "OK",
      message: "Success",
      data: user
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: "Fail",
      message: `Failed to login: ${err.message}`
    });
  }
};

exports.currentUser = async (req, res) => {

    res.status(200).json({
      status: "OK",
      message: "Success",
      data: req.user
    });
};
