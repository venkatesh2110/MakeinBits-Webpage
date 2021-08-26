const mongoose = require('mongoose');

const schema = mongoose.Schema;

const careerData = new schema({
    fname : {
        type: String
    },
    lname : {
        type: String
    },
    email : {
        type: String
    },
    phoneNumber : {
        type: Number
    },
    state : {
        type: String
    },
    city : {
        type: String
    },
    Zip : {
        type: Number
    },
});

module.exports = mongoose.model('career',careerData);