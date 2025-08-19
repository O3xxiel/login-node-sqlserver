// Estado de “sesión” simple en localStorage
const SessKey = 'demoLoginSess'; // { usuarioActual, passActual }

function getSess() {
  try { return JSON.parse(localStorage.getItem(SessKey)) || null; }
  catch { return null; }
}
function setSess(s) { localStorage.setItem(SessKey, JSON.stringify(s)); }
function clearSess() { localStorage.removeItem(SessKey); }

async function apiLogin(usuario, contrasena) {
  const r = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, contrasena })
  });
  return r.json();
}

async function apiRegistrarAutenticado(usuarioActual, passActual, usuarioNuevo, passNueva) {
  const r = await fetch('/registrar-autenticado', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuarioActual, passActual, usuarioNuevo, passNueva })
  });
  return r.json();
}

function setText(id, text, cls) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.className = cls || '';
}
