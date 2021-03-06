var express = require("express");

var router = express.Router();
var db = require("../models/");


router.get("/", function(req, res) {
  res.redirect("/cheesecake");
});

// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
   db.Burger.findAll()
    console.log(dbBurger);
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});


router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
  .then(function(dbBurger) {
      console.log(dbBurger);
     res.redirect("/");
  });
});


router.put("/burgers/update", function(req, res) {
  // update one of the burgers
  db.Burger.update({
    eaten: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });
});

module.exports = router;
