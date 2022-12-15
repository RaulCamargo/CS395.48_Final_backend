const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db');

const Task = db.define('Task',
    {
        description: 
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        priority:
        {
            type: DataTypes.STRING,
            defaultValue: 'Medium'
        },
        completion:
        {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }
);

module.exports = Task;