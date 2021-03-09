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
      "INSERT INTO ?? (??) VALUES (?)",
      [tableName, columnName, value],
      (err, res) => {
        if (err) throw err;
        callback(res);
      }
    );
  },
  updateOne(
    tableName,
    columname,
    columnvalue,
    conditioncolumn,
    conditionvalue,
    callback
  ) {
    console.log(tableName);
    connection.query(
      "UPDATE ?? SET ?? = ? WHERE ?? = ?",
      [tableName, columname, columnvalue, conditioncolumn, conditionvalue],
      (err, res) => {
        if (err) throw err;
        callback(res);
      }
    );
  },
};

module.exports = orm;
