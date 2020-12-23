const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const horongoSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Horongo = mongoose.model('Horongo', horongoSchema);

module.exports = Horongo;