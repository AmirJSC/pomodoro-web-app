const User = require('../models/User');
const bcrypt = require('bcrypt');
const auth = require('../auth');

module.exports.registerUser = async (reqBody) => {
	const {email, password} = reqBody;

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
			return 'Email is already taken.';
		}

		let newUser = new User({
			email: email,
			password: bcrypt.hashSync(password, 10)
		});

		await newUser.save();
		return newUser;
	}
	catch(err) {
		console.log(err);
		return 'Something went wrong!';
	}
}

module.exports.loginUser = async (reqBody) => {
	const {email, password} = reqBody;

	try {
		let user = await User.findOne({email: email});
		// findOne returns null (falsy) if no email is found. 
		if(!user) {
			return 'No user is found with this email';
		}
		else {
			const isPasswordCorrect = bcrypt.compareSync(password, user.password);
			if(isPasswordCorrect) {
				return {access: auth.createAccessToken(user)};
			}
			else {
				return 'Incorrect password';
			}
		}
	}
	catch(err) {
		console.log(err);
		return 'Something went wrong!';
	}
}