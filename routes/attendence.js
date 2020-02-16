const express=require('express');
const Attandence=require('../model/attendence');
const router=express.Router();

router.get('/',(req,res,next)=>{
    Attandence.find(req.body)
    .then((attandence)=>{
        res.json(attandence)
    }).catch(next);
})

router.post('/',(req,res,next)=>{
    Attandence.create(req.body)
    .then((attandence)=>{
        res.json({ status: "Success" });
    }).catch(next);
});