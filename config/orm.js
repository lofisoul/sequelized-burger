var connection = require('./connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
  selectAll: function(db_table, cb) {
    //db_table => burgers
    var queryString = 'SELECT * FROM ' + db_table;
    connection.query(queryString, function(err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  insertOne: function(db_table, db_cols, vals, cb) {
    //db_table => burgers
    //db_col => burger_name
    //val => INPUT FROM user
    var queryString = "INSERT INTO " + db_table;

    queryString += " (";
    queryString += db_cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(db_table, objColVals, condition, cb) {
    var queryString = "UPDATE " + db_table;

   queryString += " SET ";
   queryString += objToSql(objColVals);
   queryString += " WHERE ";
   queryString += condition;

   console.log(queryString);
   connection.query(queryString, function(err, result) {
     if (err) {
       throw err;
     }

     cb(result);
   });
  }
};

module.exports = orm;
