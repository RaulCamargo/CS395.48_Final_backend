// Routes barrel

const express = require('express');
const router = express.Router();

const taskRouter = require('./tasks');
const employeeRouter = require('./employees');

// Mount routers
router.use('/tasks', taskRouter);
router.use('/employees', employeeRouter);

// Export
module.exports = router;