// Instantiate database

const {Sequelize} = require('sequelize');
const {dbName, dbUser, dbPwd} = require('./utils/configDB');

const db = new Sequelize(dbName, dbUser, dbPwd, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

module.exports = db;