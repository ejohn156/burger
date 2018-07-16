var orm = require("../config/orm")

orm.selectAll("burgers")
orm.insertOne("burgers", burger)
orm.updateOne("burgers", burger)
