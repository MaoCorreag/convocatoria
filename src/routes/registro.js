const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add',async(req,res)=>{
      const usua = await pool.query('select * from modalidad');
      res.render('registro/add',{usua});
});

router.post('/add',async(req,res)=>{
      console.log(req.body);
      await pool.query('insert into modalidad set ?',[req.body]);
      res.redirect('/registro/add');
      
});


module.exports= router;