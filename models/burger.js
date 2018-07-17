var orm = require("../config/orm")

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res)
        })
    }, 
    create: function(cb){
        orm.insertOne(burger_name, function(res){
            cb(res)
        })
    }, 
    update: function(cb){
        orm.updateOne(id, function(res){
            cb(res)
        })
    }

}

module.exports = burger