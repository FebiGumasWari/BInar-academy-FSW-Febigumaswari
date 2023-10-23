"use strict";
const { Model } = require("sequelize");
const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey: 'createdBy',
        as:'created'
      })
      this.belongsTo(models.User,{
        foreignKey: 'updatedBy',
        as:'updated'
      })
      this.belongsTo(models.User,{
        foreignKey: 'deletedBy',
        as:'deleted'
      })
    }
  }
  Car.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      type: DataTypes.ENUM("small", "medium", "large"),
      image: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      rentPerDay: DataTypes.INTEGER,
      description: DataTypes.STRING,
      availableAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Car",
      paranoid: true,
    }
  );
  Car.beforeCreate(car => car.id = uuidv4())
  return Car;
};
