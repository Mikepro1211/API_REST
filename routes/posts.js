const express =  require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req,res)=>{
    res.send("We are on post");
});
//console.log(req.body);
router.post('/',async (req,res)=>{
    const post = new Post({
        imagen: req.body.imagen,
        name: req.body.name,
        album: req.body.album,
        year: req.body.year,
    });
    try{
     const savedPost = await post.save();
     res.json(savedPost);   
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;