const express         = require('express');
const reservationController = require('../controller/reservationController.js');

const backend_router = express.Router();
const frontend_router = express.Router();

backend_router
    .route('/')
    .get(reservationController.getReservations)
    .post(reservationController.addReservation);

frontend_router
    .route('/')
    .get(reservationController.reservation);


module.exports = {
    backend_router : backend_router,
    frontend_router : frontend_router
};