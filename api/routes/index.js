const { response } = require('express');
var express = require('express');
var router = express.Router();
const User = require("../model/user");
const Billet = require("../model/billet");

/* GET home page. */
router.get('/:user?', function(req, res, next) {
  console.log(req.params.user);
  if (req.params.user === "login") {
    res.status(400).json({"user": res.locals.user});

  }
  else if (req.params.user && req.params.user == res.locals.user.login) {
    Billet.find({}, function(err, billets){
      if (err) return console.log(err);
      console.log("de");
      return res.status(200).json({"user": res.locals.user});

    });
  }
});

module.exports = router;
