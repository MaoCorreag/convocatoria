const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add',async(req,res)=>{
      const usua = await pool.query('select * from anexos');
      res.render('accesorios/add',{usua});
});

router.post('/add',async(req,res)=>{
      console.log(req.body);
      await pool.query('insert into anexos set ?',[req.body]);
      res.redirect('/accesorios/add');
      
});


module.exports= router;