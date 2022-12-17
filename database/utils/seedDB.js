const { Employee, Task } = require('../models');

const seedDB = async () => 
{
	const dummyEmployee = await Employee.create(
    {
		firstName: "Melissa",
		lastName: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create(
    {
		firstName: "Kim",
		lastName: "Kardashian"
	});

	const dummyTask = await Task.create(
    {
		description: "Fix computer",
        priority: "HIGH",
	});

    const dummyTask2 = await Task.create(
    {
        description: "Cover exhaust port."
    });

	await dummyTask.setEmployee(dummyEmployee);
    await dummyTask2.setEmployee(dummyEmployee2);
	
}

module.exports = seedDB;