const faculty=require('./routes/faculty');
const student=require('./routes/student');
const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const body_parser=require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const auth=require('./auth');



const app=express();
app.use(body_parser.json());
app.options('*', cors());
app.use(morgan('tiny'));
//user

// app.use(express.static(__dirname + "/public"));
// const upload=require('./routes/upload');
//Message
// const Messages=require('./routes/Message');
// //addFriend
// const AddFreind=require('./routes/add_friend');
// app.use('/addfriend',AddFreind);
// app.use('/user',RegisterUser);
// app.use('/upload',upload);
//app.use(auth.verifyUser);
// app.use('/message',Messages);
app.use('/faculty',faculty);
app.use('/student',student);
mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((URL)=>{
    console.log("Sucessfully connected the server");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running in port:${process.env.PORT}`);
})
module.exports=app;
