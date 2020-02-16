const mongoose=require('mongoose');
const facultySchema=new mongoose.Schema({
    facultyFirstname:{
        type:String
        
        
    },
    facultyLastname:{
        type:String
        
    },
    facultyMobileno:{
        type:String
    },
    facultyAddress:{
        type:String
    },
    facultyUsername:{
        type:String
    },
    facultyPassword:{
        type:String
    }
    

})
module.exports=mongoose.model('Faculty',facultySchema);

