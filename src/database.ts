import pg from 'pg';

const { Pool } = pg;

const user = 'postgres';
const password = '';
const host = 'localhost';
const port = 5432;
const database = 'poc';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});
export default connection;
//const query = connection.query('SELECT * FROM produtos;');

//query.then(result => {
//    console.log(result.rows);
//});