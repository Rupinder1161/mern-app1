const express = require('express');
// const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const twilio = require('twilio')




const account = 'ACfe2a911e16bd40da832c087e6a7d792626262695'
const authToken ='b50ebdf1689bb30b612bbf2f892626665d5bd18'

const client = new twilio(account,authToken);


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
// ------twillio---

connection.once('open', () =>{

    console.log('MongoDb database connection established successfully');
})


const excerciseRouter = require('./routes/excercises')
const userRouter = require('./routes/users')
const apprrovedRouter = require('./routes/approovedexcercises')
//  const gur = require('../src/gur')
app.use('/excercises',excerciseRouter);
app.use('/users',userRouter)
app.use('/approoved',apprrovedRouter)
//  app.use('/lub',gur)

app.use(express.json());
// ---------------
// app.get('/send-text', ( req,res) =>{
//     res.send("Hello Express");
//     // const {recipient ,textmessage} = req.query
//     // console.log(req.query.textmessage)
//     // let Gurpreet = textmessage
//     // console.log(Gurpreet)
//     // // client.messages.create({
//     // //      body : textmessage,
//     // //      to : recipient,
//     //      from:'+12059007159'

//     // }
//     // ).then(message => console.log(message.body))
//     // .catch(err => console.log(err))
// })

// app.get('/hel',(req,res) =>{
// Response.json({"messgae":"hw"})

// })

app.listen(port, () =>{
    console.log(`server is running on port : ${port}`);
});
