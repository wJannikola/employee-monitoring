import mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

const Employee = mongoose.model('Employee', employeeSchema);

export { Employee };