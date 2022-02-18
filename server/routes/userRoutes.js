const express = require('express');
const router = express.Router();
const auth = require('../auth');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register users to the site
router.post('/register', async (req, res) => {
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
		res.status(201).send(newUser);
	}
	catch(err) {
		console.log(err);
		res.status(500).send('Something went wrong!');
	}
});

router.post('/login', async (req, res) => {
	const {email, password} = req.body;

	try {
		let user = await User.findOne({email: email});
		if(user=== null) {
			res.send(403).send('No user is found with this email');
		}
		else {
			const isPasswordCorrect = bcrypt.compareSync(password, user.password);
			if(isPasswordCorrect) {
				res.status(200).send({access: auth.createAccessToken(user)});
			}
			else {
				res.send(403).send('Wrong password');
			}
		}
	}
	catch(err) {
		console.log(err);
		res.status(500).send('Something went wrong!')

	}
});

module.exports = router;