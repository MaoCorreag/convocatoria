const express= require('express');
const router= express.Router();
const {generateAuthToken} = require("../helpers/auth");
const connection = require('../database');

router.post('/login',(req,res)=>(
    connection.query('SELECT * FROM `usuarios` WHERE `correo` = ? AND `password` = ?',[req.body.email, req.body.password], (err, results, _ ) => {
      if(err || !results || results.length === 0) return res.render('login', {message:'Error en el inicio de sesión'});
      const user = results[0];
      const authToken = generateAuthToken({
        id:user.id,
        correo:user.correo,
        password:user.password
      });
      req.session.token = authToken;
      if(user.rol === '0') return res.redirect('/admin');
      if(user.rol === '1') return res.redirect('/coordinador');
      else return res.redirect('/estudiante')
    })
));

module.exports= router;
