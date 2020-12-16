const express = require('express');
const router = express.Router();
const {checkAuth} = require('../helpers/auth');
const { getSolicitudes, getUser } = require('../helpers/common');

router.get('', checkAuth, async(req,res) => {
  try{
    const user = await getUser(req.user.id)
    const list = await getSolicitudes('0');
    return res.render('coord', {user,list,alert: req.session.alert});
  }catch (e) {
    req.session.message = 'Error en el inicio de sesión';
    return res.redirect('/');
  }
});


module.exports= router;
