let connection = require("./connection");

const orm = {
  selectAll(tableName, callback) {
    connection.query("Select * FROM ??", tableName, (res) => callback(res));
  },
  insertOne(tableName, columnName, value, callback) {
    connection.query(
      "INSERT INTO ?? (??) VALUES ?",
      [tableName, columnName, value],
      (res) => callback(res)
    );
  },
  updateOne(tableName, columnValObject, condition, callback) {
    connection.query(
      "UPDATE ?? SET ?? WHERE ?",
      [tableName, columnValObj, condition],
      (res) => callback(res)
    );
  },
};

module.exports = orm;
