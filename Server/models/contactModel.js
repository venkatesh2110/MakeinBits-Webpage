const mongoose = require('mongoose');

const schema = mongoose.Schema;

const contactData = new schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },
    description:
    {
        type: String
    }
});

module.exports = mongoose.model('contact',contactData);