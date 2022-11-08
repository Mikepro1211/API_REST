const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//middle ware 
app.use(bodyParser.json());
//Import Route 
const postsRoute = require('./routes/posts.js');
 app.use('/posts', postsRoute);
//Rutas
app.get('/', (req,res)=>{
    res.send("We are on home");
});


//coneccion a base de dato
mongoose.connect('mongodb+srv://miguel:12345@apirest2.ivafsms.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true},()=>console.log("Coneccion a base de dato"));

//listener
app.listen(3000);