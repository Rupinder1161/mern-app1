const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
     username:{ type:String, required:true,},
     description:{ type:String, required:true,},
     duration:{ type:String, required:true,},
     date:{ type:Date, required:true,},
     deleted:{type:Number},
    },{
        timestamps:true,
    });



    const Exercise = mongoose.model('Exececise',exerciseSchema);

    module.exports = Exercise;