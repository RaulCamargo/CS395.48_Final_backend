const Task = require('./Task');
const Employee = require('./Employee');

Task.belongsTo(Employee);
Employee.hasMany(Task);

module.exports = {
    Task,
    Employee
};