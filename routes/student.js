const express=require('express');
const Student=require('../model/student');
const router=express.Router();

router.get('/',(req,res,next)=>{
    Student.find(req.body)
    .then((sudent)=>{
        res.json(sudent)
    }).catch(next);
})

router.post('/',(req,res,next)=>{
    Student.create(req.body)
    .then((sudent)=>{
        res.json({ status: "Success" });
    }).catch(next);
});

router.delete('/me',(req,res,next)=>{

    const id = req.params.id;
        Student.findOneAndDelete(id)
            .then((student) => {
                if (student == null) throw new Error("Task not found!");
                res.json(student);
            }).catch(next);
})

module.exports=router;



