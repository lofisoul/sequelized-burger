var db = require('../models');

module.exports = function(app) {
  //selectAll is the HTML route
  //router becomes app
  app.get('/', function(req,res) {
    db.burger.findAll({}).then(function(data) {
      //console.log(data);
      res.render('index',{burger: data});
    });
  });
};
