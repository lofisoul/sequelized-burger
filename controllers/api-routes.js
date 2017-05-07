var db = require("../models");

//these modify the db (API)
module.exports = function(app) {
  //updateOne
  app.put('/', function(req,res){
    //updateOne becomes update
    db.burger.update({
      devoured: req.body.devoured
    }, {
      where {
        id: req.body.id
      }
    }).then(function(result){
      res.json(result);
    });
  });

  //add
  app.post('/', function(req,res){
    //create method becomes the old insertOne
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(result) {
      res.json(result);
    });
  });
};
