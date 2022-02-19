const Task = require('../models/Task');

module.exports.getTasks = async (payload) => {
	try {
		// findOne returns null(falsy) if nothing is found.
		let tasks = await Task.findOne({userId: payload.id});

		if(!tasks) {
			return 'You have no tasks.';
		}
		return tasks;
	}
	catch(err) {
		console.log(err);
		return 'Something is wrong.';
	}
}
