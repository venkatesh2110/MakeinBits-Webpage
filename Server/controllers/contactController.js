const express = require('express');
const Contact = require('./../models/contactModel');
const router = express.Router();

router.post('/',(req,res) => {
    const contactDetail = req.body;
    const contact = new Contact(contactDetail);
    contact.save((err,doc) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(doc);
        }
    })
});

module.exports = router;