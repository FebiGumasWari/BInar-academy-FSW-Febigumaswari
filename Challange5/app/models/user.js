const { Model } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      this.hasMany(models.Car, {
        foreignKey: 'createdBy',
        as: 'created'
      });
      this.hasMany(models.Car, {
        foreignKey: 'updatedBy',
        as: 'updated'
      });
      this.hasMany(models.Car, {
        foreignKey: 'deletedBy',
        as: 'deleted'
      });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please input the correct email format"
          }
        },
      },
      encryptedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      role: {
        allowNull: false,
        type: DataTypes.ENUM('SUPERADMIN', 'ADMIN', 'MEMBER')
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(user => (user.id = uuidv4()));
  return User;
};
