const mongoose = require ('mongoose');
const Schema = mongoose.Schema ; 
const bankSchema = new Schema ({  
    name:{
        type: String,
        required: true
    }  ,
    difficulty: {
        type : String,
        required :true
         
    },
    muscles : {
        type : [String],
        required :true 
    },
    type : {
        type : String ,
        required : true
    },
    place : {
        type :String , 
        required : true
    },
},{
    timestamps : true ,
});

const bank = mongoose.model('bank',bankSchema); 
module.exports=bank ;