const mysql = require("mysql");

const { HOST, USER, PASSWORD, DATABASE } = process.env;
const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  multipleStatements: true,
});

module.exports = connection;
