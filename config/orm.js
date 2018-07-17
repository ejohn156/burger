var connection = require("../config/connection.js")

orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (error, result) {
            if (error) throw error
            cb(result)
        })
    },
    insertOne: function (burger_name, cb) {
        connection.query("INSERT INTO burgers(burger_name, devoured) VALUES (?,?)", [burger_name, false], function (err, res) {
            if(err) throw err
            cb(res)
        })
    },
    updateOne: function(id, cb){
        connection.query("UPDATE burgers WHERE id = ? SET devoured = true", id, function(err, res){
            if(err) throw err
            cb(res)
        })
    }
}

module.exports = orm