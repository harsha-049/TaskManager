const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// POST request to add a new task
router.post('/', taskController.addTask);

// GET request to get all tasks
router.get('/', taskController.getTasks);

// GET request to get a task by ID
router.get('/:id', taskController.getTaskById);

// PUT request to update an existing task
router.put('/:id', taskController.updateTask);

// DELETE request to delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
