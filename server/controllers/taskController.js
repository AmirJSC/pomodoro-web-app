const Task = require('../models/Task');

module.exports.getTask = async (payload) => {
	try {
		// findOne returns null(falsy) if nothing is found.
		// tasks has three properties: userId, id, & tasks.
		let task = await Task.findOne({userId: payload.id});

		if(!task) {
			return 'You have no tasks.';
		}
		return task;
	}
	catch(err) {
		console.log(err);
		return 'Something went wrong.';
	}
}

module.exports.addTask = async (data) => {
	const reqBody = data.reqBody;

	try {
		let task = await Task.findOne({userId: data.payload.id});

		if(!task) {
			task = new Task({
				userId: data.payload.id,
				taskList: reqBody
			});

			await task.save();
			return task;
		}
		else {
			task.taskList.push(reqBody);

			await task.save();
			return task;
		}
	}
	catch(err) {
		console.log(err);
		return 'Something went wrong.';
	}
}

module.exports.editTask = async (data) => {
	const reqBody = data.reqBody;

	try {
		let task = await Task.findOne({userId: data.payload.id});
		let editedTask = task.taskList.id(data.taskId);
		editedTask.task = reqBody.task;
		editedTask.description = reqBody.description;

		await task.save();
		return task;
	}
	catch(err) {
		console.log(err);
		return 'Something went wrong.'
	}
}