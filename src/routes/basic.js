const express = require('express');
const router = express.Router();
const pool = require('../database');
const {checkAuth} = require('../helpers/auth');

router.get('', checkAuth, async(req,res) =>
pool.query('SELECT ' +
'info.*, ' +
'usuarios.nombres, ' +
'solicitudes.id as idSolicitud, solicitudes.* ' +
'FROM usuarios ' +
'LEFT JOIN info_usuarios AS info ' +
'ON usuarios.id = info.usuario ' +
'LEFT JOIN solicitudes ' +
'ON solicitudes.usuario = usuarios.id ' +
'WHERE usuarios.id = ?',[req.user.id], (err, results, _ ) => {
    console.log(err);
    console.log(results);
  console.log(req.user.id);
    if (err || !results) res.render('login', {message: 'Error en el inicio de sesión'});
    else {
      const user = results[0];
      console.log(user);
      res.render('estudiante', {user});
    }
  })
);

router.post('', checkAuth,async(req,res)=>{
   console.log(req.body);
   console.log(req.user);
  return pool.query('INSERT INTO solicitudes SET ?',[req.body], (err, results, _ ) => {
    console.log(err);
    console.log(results);
    if (err || !results) res.render('login', {message: 'Error en el inicio de sesión'});
    else {
      const user = results[0];
      console.log(user);
      res.render('estudiante', {user});
    }
  })
   // await pool.query('insert into basica set ?',[req.body]);
   // res.redirect('/basic/add');
});


module.exports= router;
