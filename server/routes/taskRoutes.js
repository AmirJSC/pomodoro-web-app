const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../auth');

router.get('/', auth.verify, (req, res) => {
	const payload = auth.decode(req.headers.authorization);

	taskController.getTasks(payload).then(resultFromController => 
		res.send(resultFromController))
});

router.post('/', auth.verify, async (req, res) => {
	
});

module.exports = router;