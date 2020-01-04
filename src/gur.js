var nodemailer = require('nodemailer');
const router = require('express').Router();
var express = require('express');

// router.post('/lub', handleSendEmail)

// function handleSendEmail( ) {

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gurpreet1161@gmail.com',
    pass: 'Lookmeme1161'
  }
});
let gurpreet = ''
let device =" smok prince kit"

var mailOptions = {
  from: 'gurpreet1161@gmail.com',
  to: 'shosaporirua@gmail.com',
  subject: 'update on' + device + '@ Shosha Porirua',
  text: gurpreet
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
// }
// module.exports = router;

// module.exports = transporter;
// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');

// router.post('/lub', handleSendEmail); // handle the route at yourdomain.com/sayHello

// function handleSendEmail(req, res) {
//     // Not the movie transporter!
//     var transporter = nodemailer.createTransport({
//      service: 'Gmail',
//      auth: {
//          user: 'gurpreet1161@gmail.com', // Your email id
//          pass: 'Lookmeme1161'// Your password
//      }
//     });
//     var text = 'Hello from \n\n' + req.body.user_name;
//     var mailOptions = {
//         from: 'gurpreet1161@gmail.com', // sender address
//         to: 'gurpreet1161@gmail.com', // list of receivers
//         subject: 'Appointment Email Example', // Subject line
//         text: text,
//         html: '<!DOCTYPE html>'+
//         '<html><head><title>Appointment</title>'+
//         '</head><body><div>'+
//         // '<img src="http://evokebeautysalon1.herokuapp.com/main/img/logo.png" alt="" width="160">'+
//         '<p>Thank you for your appointment.</p>'+
//         '<p>Here is summery:</p>'+
//         '<p>Name: James Falcon</p>'+
//         '<p>Date: Feb 2, 2017</p>'+
//         '<p>Package: Hair Cut </p>'+
//         '<p>Arrival time: 4:30 PM</p>'+
//         '</div></body></html>'
//     };
//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             console.log(error);
//             res.json({yo: 'error'});
//         }else{
//             console.log('Message sent: ' + info.response);
//             res.json({yo: info.response});
//         };
//     });
// }

// module.exports = router;