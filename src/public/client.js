console.log('Client-side code running');

const reject = document.getElementById('rejectRequest');
const approve = document.getElementById('approveRequest');
const sendRequest = document.getElementById('sendRequest');
const cancelRequest = document.getElementById('cancelRequest');
const legendRequest = document.getElementById('legendRequest');
const formApprove = document.getElementById('formApprove');
const formReject = document.getElementById('formReject');

reject.addEventListener('click', function(e) {
  legendRequest.innerText = 'Rechazar Solicitud';
  sendRequest.style.display = 'block';
  formReject.style.display = 'block';
  document.getElementById("comentarios").required = true;
  approve.style.display = 'none';
  reject.style.display = 'none';
});

approve.addEventListener('click', function(e) {
  legendRequest.innerText = 'Aprobar Solicitud';
  sendRequest.style.display = 'block';
  formApprove.style.display = 'block';
  document.getElementById("fecha_grado").required = true;
  approve.style.display = 'none';
  reject.style.display = 'none';
});

cancelRequest.addEventListener('click', function(e) {
  sendRequest.style.display = 'none';
  formReject.style.display = 'none';
  formApprove.style.display = 'none';
  approve.style.display = 'block';
  reject.style.display = 'block';
});
