const mysql = require('mysql2/promise');
const con = require('./dbConnect');

async function query(sql, params) {
  const connection = await mysql.createConnection(con.db);
  const [results,] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}
