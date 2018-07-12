var connection = require("./connection.js");

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burger";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    insertOne: function() {
        var queryString = "INSERT INTO burger" ;
        connection.query(querystring, function(err, result) {
          if (err) throw err;
          console.log(result);
        })
    },

    updateOne: function() {
        var queryString = "UPDATE burger WHERE ?" ;
        connection.query(querystring, function(err, result) {
          if (err) throw err;
          console.log(result);
        })
    }

}