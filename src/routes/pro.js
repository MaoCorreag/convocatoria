const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
      res.render('pro/add');
});

module.exports= router;