const mongoose = require('mongoose');

const resiSchema = new mongoose.Schema({
    number: String,
    courier: String,
    seller: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Resi = mongoose.model('Resi', resiSchema);

module.exports = Resi;