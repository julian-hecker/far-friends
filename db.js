const Sequelize = require('sequelize');
const connectionURI = process.env.CLEARDB_DATABASE_URL;

const sequelize = new Sequelize(connectionURI);

module.exports = sequelize;
