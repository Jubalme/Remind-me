const mongoose = require('mongoose');

// Task Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    completedAt: {
        type: Date,
    },
    dueDate: {
        type: Date, // Optional due date for the task
    },
    reminder: {
        date: {
            type: Date, // Date and time of the reminder
        },
        isSent: {
            type: Boolean,
            default: false, // Whether the reminder has been sent or not
        },
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Refers to the user who created the task (if you have user authentication)
    },
});

// Pre-save hook to set 'completedAt' when a task is marked as completed
taskSchema.pre('save', function (next) {
    if (this.isCompleted && !this.completedAt) {
        this.completedAt = new Date();
    }
    next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
