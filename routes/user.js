const Express =require("express");
const routes= Express.Router();
const bodyParser= require("body-parser");
const cors=require("cors");

routes.use(bodyParser.json());