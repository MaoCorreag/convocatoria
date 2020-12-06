const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
      res.render('reparacion/add');
});

module.exports= router;