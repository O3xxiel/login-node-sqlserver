// routes/auth.js
const express = require('express');
const router = express.Router();
const { sql, getPool } = require('../db');

// ---- /login ----
router.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;
  if (!usuario || !contrasena) {
    return res.status(400).json({ ok:false, error:'Faltan campos' });
  }

  try {
    const pool = await getPool();
    const r = await pool.request()
      .input('Nombre', sql.NVarChar(50), usuario)
      .input('Pass',   sql.NVarChar(50), contrasena)
      .execute('ValidarLogin');

    const row = (r.recordset && r.recordset[0]) || { ok:0, mensaje:'Sin respuesta' };
    res.status(row.ok ? 200 : 401).json(row);
  } catch (err) {
    res.status(500).json({ ok:false, error: err.message });
  }
});

// ---- /register ----
router.post('/register', async (req, res) => {
  const { usuario, contrasena } = req.body;
  if (!usuario || !contrasena) {
    return res.status(400).json({ ok:false, error:'Faltan campos' });
  }

  try {
    const pool = await getPool();
    const r = await pool.request()
      .input('nombreUsuario', sql.NVarChar(50), usuario)
      .input('pass',          sql.NVarChar(50), contrasena)
      .execute('protect');

    const row = (r.recordset && r.recordset[0]) || { ok:1, mensaje:'Usuario registrado' };
    res.status(200).json(row);
  } catch (err) {
    res.status(400).json({ ok:false, error: err.message });
  }
});

// ---- /registrar-autenticado ----
router.post('/registrar-autenticado', async (req, res) => {
  const { usuarioActual, passActual, usuarioNuevo, passNueva } = req.body;
  if (!usuarioActual || !passActual || !usuarioNuevo || !passNueva) {
    return res.status(400).json({ ok:false, error:'Faltan campos' });
  }

  try {
    const pool = await getPool();
    const r = await pool.request()
      .input('UsuarioActual', sql.NVarChar(50), usuarioActual)
      .input('PassActual',    sql.NVarChar(50), passActual)
      .input('UsuarioNuevo',  sql.NVarChar(50), usuarioNuevo)
      .input('PassNueva',     sql.NVarChar(50), passNueva)
      .execute('RegistrarAuntenticado');

    const row = (r.recordset && r.recordset[0]) || { ok:0, mensaje:'Sin respuesta' };
    res.status(row.ok ? 200 : 401).json(row);
  } catch (err) {
    res.status(400).json({ ok:false, error: err.message });
  }
});

module.exports = router;
