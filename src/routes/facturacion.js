const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
      res.render('facturacion/add');
});

module.exports= router;