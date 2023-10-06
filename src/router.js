const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const { getAll } = require('./models/tasksModel');
const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks',tasksMiddleware.validateFieldTitle, tasksController.createAluno);
router.delete('/tasks/:id', tasksController.deleteAluno);
router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.updateAluno);

module.exports = router;