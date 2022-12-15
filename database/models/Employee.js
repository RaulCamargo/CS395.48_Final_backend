const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Employee = db.define("Employee",
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING
        }
    }
);

module.exports = Employee;