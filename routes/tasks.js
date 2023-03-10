const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');

// async handler
const ash = require('express-async-handler');

// Get ALL tasks
router.get('/', ash(async(req, res) =>
    {
        let tasks = await Task.findAll({include: [Employee]});
        res.status(200).json(tasks);
    }
));

// Get task by ID
router.get('/:id', ash(async(req, res) => 
    {
        let task = await Task.findByPk(req.params.id, {include: [Employee]});
        res.status(200).json(task);
    }
));

// Add task
router.post('/', (req, res, next) =>
    {
        Task.create(req.body)
            .then(createdTask => res.status(200).json(createdTask))
            .catch(err => next(err));
    }
);

// Delete task
router.delete('/:id', ash(async(req, res) =>
    {
        await Task.destroy(
            {
                where: {id: req.params.id}
            });
        res.status(200).json('Task deleted.');
    })
);

// Edit task
router.put('/:id', ash(async(req, res) =>
    {
        await Task.update(req.body, 
            { 
                where: {id: req.params.id}
            });
        let task = await Task.findByPk(req.params.id);
        res.status(201).json(task);
    }));

module.exports = router;