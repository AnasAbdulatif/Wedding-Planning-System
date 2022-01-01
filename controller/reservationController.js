const Reservation = require('../model/reservationModel');

const Pusher = require('pusher');
const Path   = require('path');


let pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
});

function reservation(req, res, next) {
    res.type('html');
    res.sendFile(Path.join(__dirname, '../view/makeReservation.html'));
}

function getReservations(req, res)
 {
        Reservation.find().then(reservations => res.json({
            sucess: true,
            reservations: reservations
         }));

}


//add reservation
function addReservation(req, res) 
{
   const data = {
    partner1: req.body.partner1,
    partner2: req.body.partner2,
    hallID: req.body.hallID,
    hallName: req.body.hallName,
    reservationID: req.body.reservationID,
    reservationDate: req.body.reservationDate,
    invitations: req.body.invitations,
    foodServingMethod: req.body.foodServingMethod
 };

    if(Reservation.hallName === hallName){
        if(Reservation.reservationDate === reservationDate){
            return res.json({ success: false, message: 'Wedding hall is reserved at that date'});
        }
        else{
            new Reservation(data).save().then(reservation =>{
                pusher.trigger('myapp', 'reservations',{
                 partner1: reservation.partner1,
                 partner2: reservation.partner2,
                 hallID: reservation.hallID,
                 hallName: reservation.hallName, 
                 reservationID: reservation.reservationID,
                 reservationDate: reservation.reservationDate,
                 invitations: reservation.invitations,
                 foodServingMethod: reservation.foodServingMethod
                });
                return res.json({ success: true, message: 'Wedding hall added successfully!'});
            });
        }
    }

   
}


module.exports = {
    reservation: reservation,
    getReservations: getReservations,
    addReservation: addReservation
    
}