const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add',async(req,res)=>{
      const usua = await pool.query('select * from usuarios');
      res.render('usuarios/add',{usua});
});

router.post('/add',async(req,res)=>{
     // res.send('oh yeah');
            
     //const {nombre,apellido,cedula,celular} =req.body;
     //const newUser = {nombre,apellido,cedula,celular};
     //console.log(req.body);
    // console.log(newUser);

      await pool.query('insert into usuarios set ?',[req.body]);
      res.redirect('/usuarios/add');
      
});

router.get('/delete/:id_usuario',async(req,res)=>{
      const {id_usuario} = req.params;
      const usua = await pool.query('delete from usuarios where id_usuario=?',[id_usuario]);
      res.redirect('/usuarios/add');
})

router.get('/update',async(req,res)=>{
      const usuarios = await pool.query('select * from `usuarios`');
      res.render('usuarios/update',{usuarios});
   });
   
   router.post('/update',async(req,res)=>{
    
      const user = await pool.query('select * from `usuarios`');
      await pool.query('update empleados set nombre=?, apellidos=?, cedula=?, celular=? where id=?',[req.body.nombre_usuario, req.body.apellido_usuario, req.body.cedula_usuario, req.body.celular_usuario]);
      res.redirect('/usuarios/update');
   });

module.exports= router;