import mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

const Employee = mongoose.model('Employee', employeeSchema);

export { Employee };