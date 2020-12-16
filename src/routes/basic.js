const express = require('express');
const router = express.Router();
const {checkAuth} = require('../helpers/auth');
const {saveInfo, saveSolicitud, getEstudianteFull} = require('../helpers/common');

router.get('', checkAuth, async(req,res) => {
  try{
    const user = await getEstudianteFull(req.user.id)
    return res.render('estudiante', {user});
  }catch (e) {
    req.session.message = 'Error en el inicio de sesión';
    return res.redirect('/');
  }
});

router.post('', checkAuth, async(req,res)=>{
  try {
    await saveSolicitud(req.body, req.user.id)
    await saveInfo(req.body, req.user.id)
    console.log('success');
    return res.redirect('estudiante');
  } catch (e) {
    console.log(e);
    req.session.token = null;
    req.session.message = 'Error en la creación de la solicitud';
    return res.redirect('/');
  }
});


module.exports= router;
