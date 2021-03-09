let connection = require("./connection");

const orm = {
  selectAll(tableName, callback) {
    connection.query("Select * FROM ??", tableName, (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },
  insertOne(tableName, columnName, value, callback) {
    connection.query(
      "INSERT INTO ?? (??) VALUES ?",
      [tableName, columnName, value],
      (err, res) => {
        if (err) throw err;
        callback(res);
      }
    );
  },
  updateOne(tableName, columnValObject, condition, callback) {
    connection.query(
      "UPDATE ?? SET ?? WHERE ?",
      [tableName, columnValObject, condition],
      (err, res) => {
        if (err) throw err;
        callback(res);
      }
    );
  },
};

module.exports = orm;
