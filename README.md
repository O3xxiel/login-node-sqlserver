# 🔐 Login con Node.js y SQL Server

Este proyecto implementa un sistema básico de **autenticación de usuarios** utilizando **Node.js** con **Express** y una base de datos en **SQL Server**.  

## 📌 Características
- Registro de usuarios con contraseña encriptada.
- Inicio de sesión con validación contra la base de datos.
- Conexión a **SQL Server** usando `mssql`.
- Estructura modular (rutas, controladores y base de datos separados).
- Manejo de sesiones y tokens (si se implementa JWT).

---

## 🛠️ Tecnologías utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQL Server](https://www.microsoft.com/es-es/sql-server)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) para encriptar contraseñas
- [dotenv](https://www.npmjs.com/package/dotenv) para variables de entorno

---

## 📂 Estructura del proyecto
```bash
login-node-sqlserver/
│── routes/          # Rutas del sistema (ej: auth.js)
│── controllers/     # Controladores de autenticación
│── config/          # Configuración de la base de datos
│── node_modules/    # Dependencias (no se suben a GitHub)
│── .env             # Variables de entorno (NO subir a GitHub)
│── package.json     # Configuración del proyecto
│── server.js        # Punto de entrada principal


##Instalación y uso
git clone https://github.com/O3xxiel/login-node-sqlserver.git
cd login-node-sqlserver
Instalar dependencias
npm install
Crear un archivo .env en la raíz del proyecto con tus credenciales de SQL Server:
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_SERVER=localhost
DB_DATABASE=login_db
PORT=3000
para correrlo
npm start
