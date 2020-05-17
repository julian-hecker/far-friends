const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");

const User = sequelize.define(
  "user",
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Username must not be empty.",
        },
        notNull: {
          msg: "Please enter a username.",
        },
        // length: <=31
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // is: /^.+@[^\.].*\.[a-z]{2,}$/i,
        isEmail: {
          msg: "Must be a valid email address.",
        },
        notNull: {
          msg: "Please enter your email address.",
        },
        // length: <=127
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: {
          msg: "First name must not be empty",
        },
        notNull: {
          msg: "Please enter your first name.",
        },
        // length: <=31
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: {
          msg: "Last name must not be empty",
        },
        notNull: {
          msg: "Please enter your last name.",
        },
        // length: <=31
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          msg: "Please select your country",
        },
      },
      // length: <=127
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validation: {
        notNull: {
          msg: "Please enter your age.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          msg: "Please enter your password",
        },
      },
    },
    bio: {
      type: DataTypes.STRING,
      // length: <= 65535
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
    },
    onlineStatus: {
      type: DataTypes.ENUM,
      values: ["online", "offline"],
    },
    languagesSpoken: {
      type: DataTypes.STRING,
    },
    languagesInterested: {
      type: DataTypes.STRING,
    },
    // lastLogin: {},
    // photo: {},
    // friends: {},
  },
  {
    // options
  },
);

module.exports = User;
