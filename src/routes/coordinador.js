const express = require('express');
const router = express.Router();
const pool = require('../database');
const {checkAuth} = require('../helpers/auth');

router.get('', checkAuth, async(req,res) =>
  pool.query('SELECT usuarios.nombres FROM usuarios  WHERE usuarios.id = ?',[req.user.id], (err, results, _ ) => {
        console.log(results);
        if (err || !results) res.render('login', {message: 'Error en el inicio de sesión'});
        else {
              const user = results[0];
              res.render('coord', {user});
        }
  })
);

router.post('/add',async(req,res)=>{
      console.log(req.body);
      await pool.query('insert into anexos set ?',[req.body]);
      res.redirect('/accesorios/add');
      
});


module.exports= router;
