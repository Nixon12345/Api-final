const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    firstName:{
        type:String
        
        
    },
    lastName:{
        type:String
        
    },
    mobNo:{
        type:String
    },
    studAdd:{
        type:String
    },
    studDep:{
        type:String
    },
    studClass:{
        type:String
    }
    
})
module.exports=mongoose.model('Student',studentSchema);

