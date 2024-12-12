const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;

/*const Pool = require('pg').Pool;//Connect pg
const pool = new Pool({   //Перенести в env-ы
    user:"postgres",
    password:"passw",
    host:"localhost",
    port:5432,
    database:"postgres"
    
});//Connect pg

module.exports=pool;//Export files
//*/
