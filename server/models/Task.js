const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    task: {
        type: String, 
        unique: true, 
        required: true
    },
    description: {
    	type: String,  
    },
    completed: {
    	type: Boolean, 
    	default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);