const mongoose=require('mongoose');

const AttendanceSchema= new mongoose.Schema({
    present:{
        type:Boolean,
        required:false
    },

    absent:{
        type:Boolean,
        required:false
    },
})
module.exports=mongoose.model('Attandence',AttendanceSchema);

