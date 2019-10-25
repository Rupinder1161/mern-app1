const express = require('express');
// const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open', () =>{

    console.log('MongoDb database connection established successfully');
})

// const excerciseRouter = require('./routes/excercises')
// const userRouter = require('./routes/users')

// app.use('/excercises',excerciseRouter);
// app.use('/users',userRouter)
// app.use(express.json());


app.listen(port, () =>{
    console.log(`server is running on port : ${port}`);
});