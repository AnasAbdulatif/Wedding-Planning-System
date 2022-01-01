var express=require('express')
var router=express.Router()
var path = require('path');

router.get('/',(req,res)=>{
   console.log( req.oidc.isAuthenticated());
   if( req.oidc.isAuthenticated())
   {
   console.log( req.oidc.user);
   }
    res.render('index',{title:"Home"});
});

router.get('/venues_merseyside',(req,res)=>{
   console.log( req.oidc.isAuthenticated());
   if( req.oidc.isAuthenticated())
   {
   console.log( req.oidc.user.nickname);

   }
   res.render('venues_merseyside',{title:"Venues"});
});
router.get('/payment',(req,res)=>{
   console.log( req.oidc.isAuthenticated());
   if( req.oidc.isAuthenticated())
   {
   console.log( req.oidc.user.nickname);
   }
   res.render('paypal',{title:"Payment"});
});
router.get('/reservation',(req,res)=>{
   console.log( req.oidc.isAuthenticated());
   if( req.oidc.isAuthenticated())
   {
   console.log( req.oidc.user.nickname);
   }
   res.render('makeReservation',{title:"reservation"});
});



module.exports = router;
