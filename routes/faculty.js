const express=require('express');
const Faculty=require('../model/faculty');

const router=express.Router();

// router.get('/',(req,res,next)=>{
//     Faculty.find(req.body)
//     .then((friend)=>{
//         res.json(friend)
//     }).catch(next);
// })

// router.post('/',(req,res,next)=>{
//     Faculty.create(req.body)
//     .then((friend)=>{
//         res.json(friend)
//     }).catch(next);
// });

// module.exports=router;
// const express=require('express');
// const Faculty=require('../model/faculty');
const auth=require('../auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const router=express.Router();

router.post('/signup', (req, res, next) => {
    // let password = req.body.facultyPassword;
    // bcrypt.hash(password, 10, function (err, hash) {
    //     if (err) {
    //         throw new Error('Could not hash!');
    //     }
        Faculty.create({
            facultyFirstname: req.body.facultyFirstname,
            facultyLastname: req.body.facultyLastname,
            facultyUsername: req.body.facultyUsername,
            facultyAddress:req.body.facultyAddress,
            facultyMobileno:req.body.facultyMobileno,
            password: req.facultyPassword,
            image: req.body.image
        }).then((faculty) => {
            let token = jwt.sign({ _id: faculty._id }, process.env.SECRETE);
            res.json({ status: "Signup success!", token: token });
        }).catch(next);
    });


router.post('/login', (req, res, next) => {
    Faculty.findOne({ facultyUsername: req.body.facultyUsername })
        .then((faculty) => {
            if (faculty == null) {
                let err = new Error('Faculty not found!');
                err.status = 401;
                return next(err);
            } else {
                // bcrypt.compare(req.body.facultyPassword, faculty.password)
                //     .then((isMatch) => {
                //         if (!isMatch) {
                //             let err = new Error('Password does not match!');
                //             err.status = 401;
                //             return next(err);
                //         }
                //         let token = jwt.sign({ _id: faculty._id }, process.env.SECRETE);
                //         res.json({ status: 'Login success!', token: token });
                //         console.log(req.body.facultyUsername);
                //         console.log(req.body.facultyPassword);
                //     }).catch(next);

                let token = jwt.sign({ _id: faculty._id }, process.env.SECRETE);
                        res.json({ status: 'Login success!', token: token });
                        console.log(req.body.facultyUsername);
                        console.log(req.body.facultyPassword);
  
            }
        }).catch(next);
})

router.get('/me', auth.verifyUser, (req, res, next) => {
    res.json({ facultyFirstname: req.faculty.facultyFirstname, facultyLastname: req.faculty.facultyLastname, facultyAddress: req.faculty.facultyAddress, 
        facultyUsername: req.faculty.facultyUsername,   image: req.faculty.image});
});

router.put('/me', auth.verifyUser, (req, res, next) => {
    Faculty.findByIdAndUpdate(req.faculty._id, { $set: req.body }, { new: true })
        .then((faculty) => {
            res.json({ _id: faculty._id, facultyFirstname: req.faculty.facultyFirstname, facultyLastname: req.faculty.facultyLastname, facultyUsername: faculty.facultyUsername, image: user.image });
        }).catch(next);
});
module.exports = router;


