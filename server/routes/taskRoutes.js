const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../auth');

// Retrieves the tasks of the logged in user. 
router.get('/', auth.verify, (req, res) => {
	const payload = auth.decode(req.headers.authorization);

	taskController.getTask(payload).then(resultFromController => 
		res.send(resultFromController))
});

// Adds a task. 
router.post('/', auth.verify, (req, res) => {
	const data = {
		payload: auth.decode(req.headers.authorization),
		reqBody: req.body
	};

	taskController.addTask(data).then(resultFromController => 
		res.send(resultFromController))
});

// Edit task.
router.put('/:taskId', auth.verify, (req, res) => {
	const data = {
		payload: auth.decode(req.headers.authorization),
		taskId: req.params.taskId,
		reqBody: req.body
	};

	taskController.editTask(data).then(resultFromController => 
		res.send(resultFromController))
});

module.exports = router;