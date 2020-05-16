const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

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
                notEmpty: {
                    msg: "Email must not be empty.",
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
        gender: {
            type: DataTypes.ENUM,
            values: ["male", "female"],
            allowNull: false,
            validation: {
                notIn: {
                    args: [["male", "female"]],
                    msg: "Select either 'male' or 'female' (sorry)",
                },
                notNull: {
                    msg: "Please select your gender",
                },
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
        bio: {
            type: DataTypes.STRING,
            // length: <= 65535
        },
        onlineStatus: {
            type: DataTypes.ENUM,
            values: ["online", "offline"],
        },
        // lastLogin: {},
        // photo: {},
        // spoken_languages: {},
        // interest_languages: {},
        // friends: {},
    },
    {
        // options
    },
);

module.exports = User;
