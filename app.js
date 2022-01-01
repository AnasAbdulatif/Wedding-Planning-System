var express=require('express')
var indexRouter=require('./routes/index.js')
const { auth } = require('express-openid-connect');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const ejs=require('ejs');
const mongoose = require('mongoose');
const axios=require('axios');
const { kStringMaxLength } = require('buffer');
const parse=require('node-html-parser') ;
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb+srv://anos:anos@db1.8vlan.mongodb.net/moviesDB?retryWrites=true&w=majority');
//////////////////////////////////////////
const moviesSchema = {
  title: String,
  genre: String,
  year: String
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/invitation', (req, res) => {
    Movie.findOne({"title":"ahmeda"}, function(err, movies) {
      //  let catchData={};
        const data = { };
        let sr="Host Name : "+movies.title+"                                        Venue : "+movies.genre+"                             Date : "+movies.year;
        console.log(sr);
axios.post('https://api.qr-code-generator.com/v1/create?access-token=OpvhEXnN3ZrKM01JlfBCvXZ270k3MVTbM2m4QVL3Tymtphdd8Yosgfv9wIw5B5iU',{
    frame_name: "no-frame",
    qr_code_text: `${sr}`,
    image_format: "SVG",
    qr_code_logo: "scan-me-square"


}).then(response=>{
   // console.log(response.data);
    let b64Response = Buffer.from(response.data).toString('base64')
    let image=`data:image/svg+xml;base64,${b64Response}`;
    
res.render('invitation', {
    img:image,
    moviesList: movies,
    parser:parse

})

})

    })
})
///////////////////////////////////////////
var data;
app.get('/map', (req, res) => {
    client
        .geocode({
            params: {
                address: "The British University in Egypt - BUE ",
                key: "AIzaSyDhMhlY2hghjeyJM0Z1RlyJmdzLMlpU7aA"
            },
            timeout: 1000 // milliseconds
        }, axios)
        .then(r => {
            console.log(r.data.results);
            latit = r.data.results[0].geometry.location.lat;
            langu = r.data.results[0].geometry.location.lng;
        })
        .catch(e => {
            console.log(e);
        });
    res.render('map', {
        lat: latit,
        lag: langu
    })
})
//////////////////////////////////////////////
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'dgjdflgkdjgkldfgjdklfgjkdfgjdkfgklfgjf',
  baseURL: 'http://localhost:3000',
  clientID: 'CMlBMGpLcRdxX88zul8GsTsTRFZySZrM',
  issuerBaseURL: 'https://dev-g3x7651s.us.auth0.com'
  };
app.set('views','views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const path = require("path");
app.use(express.static('puplic'))
app.use(auth(config));
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use('/reserve', require('./routes/routes').backend_router);
app.use('/weddinghalls', require('./routes/routes').frontend_router);


app.use('/',indexRouter);
app.listen(3000,()=>{
    console.log('express run 3000');
})

