const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    taskList: [{
        task: {
            type: String, 
            required: true
        },
        description: {
            type: String,  
        },
        completed: {
            type: Boolean, 
            default: false
        },
        createdOn: {
            type: Date,
            default: new Date()
        }
    }]
});

module.exports = mongoose.model('Task', taskSchema);