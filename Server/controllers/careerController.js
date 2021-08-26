const express = require('express');
const router = express.Router();
const Career = require('./../models/careerModel');

router.post('/', (req,res) => {
    const careerDetail = req.body;
    const career = new Career(careerDetail);
    career.save((err,doc) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(doc);
        }
    })
});

module.exports = router;