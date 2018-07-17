var express = require("express")
var burger = require("../models/burger")

var router = express.Router()

router.get("/api/burgers", function(req, res){
    burger.all(function(data){
        return res.json(data)
    })
})

router.get("/", function(req, res){
    burger.all(function(data){
        res.send(JSON.stringify(data))
    })
})

router.post("/api/burgers", function(req, res){
    burger.create(req.body.burger_name, function(result){
            console.log(result.burger)
            res.end()
    })
})

router.put("/api/burgers/:id", function(req, res){
    burger.create(req.params.id, function(result){
            console.log(result.id)
            res.end()
    })
})

module.exports = router