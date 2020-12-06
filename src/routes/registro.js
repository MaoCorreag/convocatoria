const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
      res.render('registro/add');
});

module.exports= router;