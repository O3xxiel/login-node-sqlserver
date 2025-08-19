// app.js
require('dotenv').config();
const express = require('express');
const { getPool } = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // <-- sirve /public



// Rutas básicas
app.get('/ping', (req, res) => res.json({ ok:true, msg:'Server vivo 👋' }));
app.get('/db-ping', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query('SELECT 1 AS ok, SYSDATETIME() AS now');
    res.json({ ok:true, db: result.recordset[0] });
  } catch (err) {
    res.status(500).json({ ok:false, error: err.message });
  }
});

// Rutas de autenticación
app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server en http://localhost:${PORT}`));
