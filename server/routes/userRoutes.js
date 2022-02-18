const express = require('express');
const router = express.Router();
const auth = require('../auth');
const User = require('../models/User');

// Register to the site
router.post('/users', async (req, res) => {
	const {email, password} = req.body;

	try {
		const isEmailTaken = await User.find({email: email}).then(result => {
			if(result.length > 0) {
				return true;
			}
			else {
				return false;
			}
		});

		if(isEmailTaken) {
			res.send('Email is already taken.')
		}

		let newUser = new User({
			email: email,
			password: bcrypt.hashSync(password, 10)
		});

		await newUser.save();
		res.status(200).send(newUser);
	}
	catch(err) {
		console.log(err);
		res.status(500).send('Something went wrong!')
	}
});

module.exports = router;