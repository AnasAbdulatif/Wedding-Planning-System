# Wedding Planning System
 wdding planner system using node js with mongoDB

 User Manual

Installed libraries:
First, the user should install the following libraries using npm Install in the command prompt
@googlemaps/google-maps-services-js
Bcrypt
Dotenv
Ejs
Express
express-openid-connect
mongodb
mongoose
node-html-parser
axios

this project contains four APIs 
Login and Register API
This API is used by the user to create and log in to his created account. To view this page using the local localhost:3000 the user is directed to the home page where the user can press the sign-in button on the navigation bar. This will direct him to an API page to log in. if the user doesn’t have an account the user can create an account. By pressing the sign-up button then insert his details to create his account. If the user forgets his password the API will send an email to change his password. After the user, successfully logs in the data of this session is saved in an object and viewed in the log and can be used in functions like request events. the user can also log out to remove the session data.  

PayPal
A payment API where the user uses his credit card or PayPal account to pay for the venue price. The price changes depending on the venue and services used. To use this API, press the payment button and insert your PayPal account and proceed with the payment by pressing a sign
QR code
Decrypts data in QR code to send it to visitors for the details of the events. to use it point a camera or a QR code reader at the generated QR and the data of the Event will be viewed. To view, a QR code containing venue details press the navigation bar invitation QR code button. This doesn’t work because the implemented code for API contains an Axios request. Which we couldn’t but in the routes file. The link to show this page is localhost:3000/invitation


Geocode and Google map
Geocode is used by our system to convert the venue location into a map point. Then this point is shown on a google map. To use this API, press the button on the navigation bar map button to show a map that is viewed using geocoder on the British university location. But also due to Axios request, we couldn’t implement this page in the out router. To view this page, use this link localhost:3000/map. Sometimes the page fails to view from the first try. The solution is to refresh the page. 

