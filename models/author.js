"use strict";
const { hash } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasOne(models.Review, { foreignKey: "authorId" });
    }
  }
  Author.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
          notNull: {
            msg: {
              msg: "Name is required",
            },
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Email is required",
          },
          notNull: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Invalid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password is required",
          },
          notNull: {
            msg: "Password is required",
          },
          len: {
            args: [5],
            msg: "Minimum password characters is 5",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  Author.beforeCreate((instance, option) => {
    instance.password = hash(instance.password);
  });
  return Author;
};
