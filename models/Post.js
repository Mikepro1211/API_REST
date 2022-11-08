const mongoose = require('mongoose');

const PostSchema =  mongoose.Schema({
    
    imagen:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    album:{
        type: String,
        require: true,
    },
    year:{
        type: String,
        require:true,
    },
});
 module.exports =  mongoose.model('Posts',PostSchema);