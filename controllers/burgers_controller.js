var express = require("express")
var burger = require("../models/burger")

router = express.router()

router.get("/", function(req,res){
    burger.all(function(data){
        var bgsdata = {
        burgers: data
        }
        console.log(bgsdata)
        res.render("index", bgsdata)
    })
})

router.post("/api/burgerss", function(req, res) {
    cat.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.sleepy
    }, condition, function(result) {
      
    });
  });

  module.exports = router