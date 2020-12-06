const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
    //res.send('oh yeah');
    res.render('links/add');
});

module.exports= router;