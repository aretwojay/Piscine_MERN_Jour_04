const mongoose = require('mongoose');
const config = require('../config');
const connection = mongoose.createConnection(config.db.url + "/" + config.db.name);
const Schema = mongoose.Schema;
let billetSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: [100, "Le nom du billet contient plus de 100 caractères."],
    },
    description: {
        type: String,
        required: true,  
        maxLength: [200, "La description du billet contient plus de 200 caractères."],

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    collection: 'billets'
})

const Billet = connection.model('Billet', billetSchema);
module.exports = Billet;