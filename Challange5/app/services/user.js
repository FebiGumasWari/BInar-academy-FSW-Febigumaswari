const authService = require("./auth");
const userRepository = require("../repositories/user");
const ApplicationError = require("../../config/errors/ApplicationError");

exports.create = async (payload, isAdmin) => {
  try {
    const { email, password, name, address, phoneNumber, role = 'MEMBER' } = payload;

    if (!email || !password) {
      throw new ApplicationError("Please Input Email and password", 400);
    }

    const encryptedPassword = await authService.encryptPassword(password);

    const user = await userRepository.create({
      email,
      encryptedPassword,
      name,
      address,
      phoneNumber,
      role: isAdmin ? 'ADMIN' :  'MEMBER'
    });

    return user;
  } catch (err) {
    throw new ApplicationError(`Failed to add new User: ${err.message}`, 500);
  }
};

exports.checkUser = async (credensials) => {
  try {
    const { email, password } = credensials;

    if (!email || !password) {
      throw new ApplicationError(`please input email or password`, 500);
    }
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
      throw new ApplicationError("Email not found", 500);
    }
    const checkedPassword = await authService.checkPassword(
      password,
      user.encryptedPassword
    );

    if (!checkedPassword) {
      throw new ApplicationError("password is wrong", 500);
    }
    const token = authService.createToken({ id: user.id });
    const userWithToken = {...user.dataValues, token}
    return userWithToken;
  } catch (err) {
    throw new ApplicationError(err.message, 500);
  }
};

