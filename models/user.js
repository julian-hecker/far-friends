const Sequelize = require("sequelize"),
    sequelize = require("../db.js");

const User = sequelize.define(
    "user",
    {   
        userName: {

        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastLogin: {

        },
        onlineStatus: {

        },
        country: {

        },
    },
    {
        // options
    },
);

module.exports = User;
