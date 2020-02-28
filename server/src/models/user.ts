import mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export { User };