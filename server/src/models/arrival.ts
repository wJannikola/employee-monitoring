import mongoose = require('mongoose');

const arrivalSchema = new mongoose.Schema({
    arrivedAt: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

const Arrival = mongoose.model('Arrival', arrivalSchema);

export { Arrival };