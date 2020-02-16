const jwt = require('jsonwebtoken');
const faculty = require('./model/faculty');
module.exports.verifyUser = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        let err= new Error("Bearer token is not set!");
        err.status = 401;
        return next(err);
    }
    let token = authHeader.split(' ')[1];
    let data;
    try {
        data = jwt.verify(token, process.env.SECRETE);
        console.log(data);
        req.faculty = data;
    } catch (err) {
        throw new Error('Token could not be verified!');
    }
    faculty.findById(data._id)
        .then((faculty) => {
            req.faculty = faculty;
            next();
        })
}

