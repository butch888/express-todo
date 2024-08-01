const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
});

module.exports = pool;

const { Client } = require('pg');

const client = new Client({
  user: 'gen_user',
  host: '147.45.250.75',
  database: 'default_db',
  password: 'B:hMvzo=2Ad&$H',
  port: 5432,
});

client.connect();