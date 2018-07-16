var connection = require("./connection")

var orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(tableInput, burger){
        var queryString = "INSERT INTO ?? VALUES (??);";
        connection.query(queryString, [tableInput, burger.name], function(err, result){
            if(err) throw err;
            console.log(result)
        });
    },
    updateOne: function(tableInput, burger){
        var queryString = "UPDATE ?? WHERE id = ?? SET devoured = true"
        connection.query(queryString, [tableInput, burger.id], function(err, result){
            if(err) throw err;
            console.log(result)
        });
    }
};

module.exports = orm