const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

module.exports = pool;

// const { Client } = require('pg');

// const client = new Client({
//   user: 'gen_user',
//   host: '147.45.250.75',
//   database: 'default_db',
//   password: 'B:hMvzo=2Ad&$H',
//   port: 5432,
// });

// client.connect();