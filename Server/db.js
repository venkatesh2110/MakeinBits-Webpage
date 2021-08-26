const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mibwebpage',{ useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify:false },(err) => {
    if(!err){
        console.log('Database Connected');
    }
    else{
        console.log('Errpr while connecting'+err);
    }
});

module.exports = mongoose;