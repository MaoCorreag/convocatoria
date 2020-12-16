const express = require('express');
const router = express.Router();
const {checkAuth} = require('../helpers/auth');
const {
  createLog,
  getSolicitud,
  updateSolicitud
} = require('../helpers/common');

router.get('/:id', checkAuth, async(req,res) => {
  try{
    const data = await getSolicitud(req.params.id);
    req.session.estudiante = data.usuario;
    return res.render('solicitud', {user:req.session.user,data,back:true});
  }catch (e) {
    req.session.message = 'Error en el inicio de sesión';
    return res.redirect('/');
  }
});

router.post('/:id', checkAuth, async(req,res) => {
  try{
    const {comentarios, fecha_grado} = req.body;
    let value = '';
    if(comentarios){
      value = comentarios;
      await updateSolicitud({estado:'2'}, req.params.id);
      req.session.alert = `Solicitud ${req.params.id} rechazada`;
    } else if(fecha_grado){
      value = fecha_grado;
      await updateSolicitud({estado:'1',fecha_grado}, req.params.id);
      req.session.alert = `Solicitud ${req.params.id} aprobada`;
    }
    await createLog(req.params.id,value,req.session.estudiante,req.user.id);
    return res.redirect('/coordinador');
  }catch (e) {
    console.log(e);
    return res.redirect(`/solicitud/${req.params.id}`);
  }
});


module.exports= router;
