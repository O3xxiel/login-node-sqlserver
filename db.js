// db.js
require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || '1433', 10),
  options: {
    encrypt: false,                      // en Windows/Azure podrías requerir true
    trustServerCertificate: process.env.TRUST_CERT === 'true'
  },
  pool: {
    max: 10,
    min: 1,
    idleTimeoutMillis: 30000
  }
};

let pool;

/** Devuelve un pool conectado (singleton) */
async function getPool() {
  if (pool) return pool;
  pool = await sql.connect(config);
  return pool;
}

module.exports = { sql, getPool };
