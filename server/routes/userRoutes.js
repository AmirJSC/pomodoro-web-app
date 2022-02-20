const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../auth');

// Registers a user to the site. Returns email and password if successful.
router.post('/register', (req, res) => {
	userController.registerUser(req.body).then(resultFromController =>
		res.send(resultFromController))
});

// Returns the access token if successful.
router.post('/login', (req, res) => {
	userController.loginUser(req.body).then(resultFromController => 
		res.send(resultFromController))
});

module.exports = router;