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
        var obj = {
            burgers: data
        }
        console.log(obj)
        res.render("index", obj)
    })
})
router.get("/api/burgers", function(req, res){
    burger.all(function(data){
        var obj = {
            burgers: data
        }
        console.log(obj)
        res.json(obj)
    })
})

router.post("/api/burgers", function(req, res){
    console.log(req.body.burger_name)
    var newBurger = req.body.burger_name
     burger.create(newBurger, function(result){
             console.log(result.burger)
             res.json({ id: result.insertId})
     })
})

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
            res.json(result)

    })
})

module.exports = router