var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//selectAll
router.get('/', function(req,res) {
  burger.selectAll(function(data) {
    console.log(data);
    res.render('index',{burger: data});
  });
});

//updateOne
router.put('/:id', function(req,res){
  var condition = "id = " + req.params.id;
  console.log("condition: " + condition);
  burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(){
    res.redirect('/');
  });
});

//add
router.post('/', function(req,res){
  burger.insertOne([
        "burger_name", "devoured"
        ], [
            req.body.burger_name, req.body.devoured
        ], function() {
            res.redirect("/");
        });
});

module.exports = router;
