import moment from 'moment'
import momentTimezone from 'moment-timezone'
import api from './init'

const form = document.getElementById('reservation-form');
var event;

form.addEventListener('submit', e => {
    const choice = document.querySelector('#weddinghall option:checked').value;
    const data = {weddinghall: choice};

    // window.location.origin is responsible for getting the base url (domain http://localhost:3000)

    fetch(window.location.origin + '/makeReservation', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => console.log(res.json()))
    .catch(err => console.log(err));

    e.preventDefault();
});

