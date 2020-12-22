const mysql = require("mysql"); // mysql
let conn; // wrapper for connection

/*
 * CREATE DATABASE USING MYSQL
 * root and password provide access to db
 */

const createConn = () =>{
  /* function to return mysql connection */
  return mysql.createConnection(process.env.JAWSDB_URL);
};

if (process.env.JAWSDB_URL) {
  conn = createConn();
} else {
  // connect to MYSQL db
  conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// connect to the database
conn.connect(function(err) {
  // error handling
  if (err) {
    console.error("Database connection error -- " + err.message.toString());
    return;
  }
  // print connection id to console
  console.log("Connection ID: " + conn.threadId);
});

// export connection
module.exports = conn;
