const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReservationSchema = new Schema({
    partner1: { 
        type: String
    },
    partner2:{
        type: String
    },
    hallID:{
        type:Number,
        required: true
    },
    hallName: { 
        type: String
    },
    reservationID:{
        type: Number,
        required: true
    },
    reservationDate: {
        type: Date,
        required: [true, 'Reservation date is required'],
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    invitations:{
        type: Number
    },
    foodServingMethod:{
        type: String
    }

});

const Reservation = mongoose.model('Reservations', ReservationSchema);


module.exports = Reservation;