var orm = require("../config/orm")

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insertOne: function (cb) {
        orm.insertOne("burgers", burger, function (res) {
            cb(res)
        })
    },
    updateOne: function (cb) {
        orm.updateOne("burgers", burger, function (res) {
            cb(res)
        })
    }
}
modules.export
