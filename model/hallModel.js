const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HallSchema = new Schema({
    hallName: {
        type: String
    },
    hallID: {
        type: Number,
        required: [true, 'Hall number is required']
    },
    hallType: {
        type: String,
        required: [true, 'Hall type is required']
    },
    hallMaxGuests:{
        type: Number,
        required: [true, 'Please specify a maximum number of guests']
    },
    hallLocation:{
        type: String,
        required: [true, 'Please specify the location of the hall']
    },
    hallRentPrice:{
        type: Number
    }

});


const Hall = mongoose.model('Hall', HallSchema);

module.exports = Hall;