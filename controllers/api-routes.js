var db = require("../models");

//these modify the db (API)
module.exports = function(app) {
  //updateOne
  app.put('/:id', function(req,res){
    //updateOne becomes update
    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result){
      res.redirect("/");
    });
  });

  //add
  app.post('/', function(req,res){
    //console.log(req.body);
    //create method becomes the old insertOne
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(result) {
      res.redirect("/");
    });
  });
};
