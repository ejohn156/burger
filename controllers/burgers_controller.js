var express = require("express")
var burger = require("../models/burger")

router = express.router()

router.get("/", function(req,res){
    return JSON.stringify(res)
})

router.post("/",function(req,res){
    return JSON.stringify(res)
})