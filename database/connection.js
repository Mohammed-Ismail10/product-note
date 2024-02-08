
import mysql from 'mysql2';

export const connecction = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'assainment3-node-with-mysql'
});