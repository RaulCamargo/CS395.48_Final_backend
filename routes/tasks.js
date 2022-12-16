const express = require('express');
const router = express.Router();
const {Task, Employee} = require('../database/models');

// async handler
const ash = require('express-async-handler');

// Get ALL tasks
router.get('/', ash(async(req, res) =>
    {
        let tasks = await Task.findAll();
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