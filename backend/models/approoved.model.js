const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
     username:{  type: String, required:true,trim:true, 
     },
    },{
        timestamps:true,
    })
    const User = mongoose.model('approoved',UserSchema);

    module.exports = User;