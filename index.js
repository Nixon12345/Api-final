const express= require("express");
const app= new express();
const port=process.env.PORT || 8000;
const body_parser= require("body-parser");
const path= require("path");

app.listen(port,function(){
    console.log("Listening on port: ", port);
});