import pg from 'pg';
var Pool = pg.Pool;
var user = 'postgres';
var password = '123';
var host = 'localhost';
var port = 5432;
var database = 'poc';
var connection = new Pool({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database
});
export default connection;
//const query = connection.query('SELECT * FROM produtos;');
//query.then(result => {
//    console.log(result.rows);
//});
