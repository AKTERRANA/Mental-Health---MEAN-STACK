const mongoose = require("mongoose");


const professionalSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    fees:{
        type:Number
    },
    newPatient:{
        type:Boolean
    },
    conditions:{
        type:String
    }
})

module.exports = mongoose.model("Professional", professionalSchema);