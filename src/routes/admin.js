const express = require('express');
const router = express.Router();
const {checkAuth} = require('../helpers/auth');
const { getHistorico, getSolicitudes, getUser } = require('../helpers/common');

router.get('', checkAuth, async(req,res) => {
  try{
    const user = await getUser(req.user.id)
    const list = await getSolicitudes('2');
    console.log(list);
    return res.render('admin', {user,list,alert: req.session.alert});
  }catch (e) {
    req.session.message = 'Error en el inicio de sesión';
    return res.redirect('/');
  }
});


module.exports= router;
