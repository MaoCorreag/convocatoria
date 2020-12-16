const connection = require('../database');

function saveSolicitud(body, user) {
  const solicitud = {
    tipo: body.tipo,
    programa: body.programa,
    semestre: `${body.periodo} del ${body.year}`,
    modalidad: body.modalidad,
    nombre_tg: body.nombre_tg,
    director: body.director,
    fecha_solicitud: new Date(),
    solicitud_grado: body.solicitud_grado === 'true' ? 1 : 0,
    copia_documento: body.copia_documento === 'true' ? 1 : 0,
    certi_saber: body.certi_saber === 'true' ? 1 : 0,
    carnet: body.carnet === 'true' ? 1 : 0,
    foto_carnet: body.foto_carnet === 'true' ? 1 : 0,
    certi_grado: body.certi_grado === 'true' ? 1 : 0,
    encuesta: body.encuesta === 'true' ? 1 : 0,
    usuario: user
  }
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO solicitudes SET ?', [solicitud], (err, results, _) => {
      if (err) return reject(err);
      return resolve()
    });
  });
}

function saveInfo(body, user){
  const info = {
    documento: body.documento,
    no_documento: body.no_documento,
    lugar_exp: body.lugar_exp,
    codigo: body.codigo,
    direccion: body.direccion,
    ciudad: body.ciudad,
    telefono: body.telefono,
    celular: body.celular
  }
  return new Promise((resolve, reject) => {
    connection.query('UPDATE info_usuarios SET ? WHERE usuario = ?', [info, user], (err, results, _) => {
      if (err) return reject(err);
      return resolve()
    });
  });
}

function getEstudianteFull(user){
  return new Promise((resolve, reject) => {
    connection.query('SELECT ' +
      'info.*, ' +
      'usuarios.nombres, ' +
      'usuarios.correo, ' +
      'solicitudes.estado as estado, ' +
      'solicitudes.fecha_solicitud as fecha_solicitud, ' +
      'solicitudes.fecha_grado as fecha_grado, ' +
      'historico.comentarios, ' +
      'historico.fecha as fecha_historico ' +
      'FROM usuarios ' +
      'LEFT JOIN info_usuarios AS info ' +
      'ON usuarios.id = info.usuario ' +
      'LEFT JOIN solicitudes ' +
      'ON solicitudes.usuario = usuarios.id ' +
      'LEFT JOIN historico ' +
      'ON historico.estudiante = usuarios.id ' +
      'WHERE usuarios.id = ? ORDER BY historico.fecha DESC',[user], (err, results, _) => {
      if (err) return reject(err);
      return resolve(results[0])
    });
  });
}

function getUser(user){
  return new Promise((resolve, reject) => {
    connection.query('SELECT ' +
      'usuarios.nombres ' +
      'FROM usuarios ' +
      'WHERE usuarios.id = ?',[user], (err, results, _) => {
      if (err) return reject(err);
      return resolve(results[0])
    });
  });
}

function getHistorico(id){
  return new Promise((resolve, reject) => {
    connection.query('SELECT ' +
      '* ' +
      'FROM historico ' +
      'WHERE historico.solicitud = ? ' +
      'ORDER BY historico.fecha DESC',[id], (err, results, _) => {
      if (err) return reject(err);
      return resolve(results[0])
    });
  });
}

function getSolicitud(id){
  return new Promise((resolve, reject) => {
    connection.query('SELECT ' +
      'solicitudes.id as idSolicitud, ' +
      'solicitudes.*, ' +
      'info.*, ' +
      'historico.*, ' +
      'usuarios.nombres AS estudiante, ' +
      'usuarios.correo AS correo ' +
      'FROM solicitudes ' +
      'LEFT JOIN usuarios ' +
      'ON usuarios.id = solicitudes.usuario ' +
      'LEFT JOIN info_usuarios AS info ' +
      'ON solicitudes.usuario = info.usuario ' +
      'LEFT JOIN historico ' +
      'ON historico.estudiante = usuarios.id ' +
      'WHERE solicitudes.id = ? ORDER BY historico.fecha DESC',[id], (err, results, _) => {
      if (err) return reject(err);
      return resolve(results[0])
    });
  });
}

function getSolicitudes(estado){
  return new Promise((resolve, reject) => {
    connection.query('SELECT ' +
      'solicitudes.id as idSolicitud, ' +
      'solicitudes.fecha_solicitud, ' +
      'solicitudes.programa, ' +
      'usuarios.nombres AS estudiante ' +
      'FROM solicitudes ' +
      'LEFT JOIN usuarios ' +
      'ON usuarios.id = solicitudes.usuario ' +
      'WHERE solicitudes.estado = ? ORDER BY solicitudes.programa DESC',[estado], (err, results, _) => {
      if (err) return reject(err);
      return resolve(results)
    });
  });
}

function updateSolicitud(data,id){
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE solicitudes SET ? WHERE id = ${id}`, [data], (err, results, _) => {
      if (err) return reject(err);
      return resolve()
    });
  });
}

function createLog(solicitud,comentarios,estudiante,aprobador){
  const data = {
    solicitud,
    comentarios,
    estudiante,
    aprobador,
    fecha: new Date()
  }
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO historico SET ?', [data], (err, results, _) => {
      if (err) return reject(err);
      return resolve()
    });
  });
}

module.exports = {
  createLog,
  getEstudianteFull,
  getHistorico,
  getSolicitud,
  getSolicitudes,
  getUser,
  updateSolicitud,
  saveInfo,
  saveSolicitud
}
