const Hall = require('../model/hallModel');

const Pusher = require('pusher');
const Path   = require('path');


let pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
});



function getHalls(req, res)
 {
        Hall.find().then(halls => res.json({
            sucess: true,
            halls: halls
         }));

}

//add hall to db
function addHalls(req, res) 
{
   const data = {
    hallName: req.body.hallName,
    hallID: req.body.hallID,
    hallType: req.body.hallType,
    hallMaxGuests: req.body.hallMaxGuests,
    hallLocation: req.body.hallLocation,
    hallRentPrice: req.body.hallRentPrice
 };

   new Hall(data).save().then(hall =>{
       pusher.trigger('myapp', 'wedding-hall',{
        hallName: hall.hallName,
        hallID: hall.hallID, 
        hallType: hall.hallType,
        hallMaxGuests: hall.hallMaxGuests,
        hallLocation: hall.hallLocation,
        hallRentPrice: hall.hallRentPrice
       });
       return res.json({ success: true, message: 'Wedding hall added successfully!'});
   });
}




module.exports = {
    addHalls: addHalls,
    getHalls: getHalls
}