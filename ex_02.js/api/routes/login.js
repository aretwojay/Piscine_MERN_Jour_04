var express = require('express');
var router = express.Router();
const User = require("../model/user");
const sha1 = require("sha1");

function id_autoincrement(id) {
    //si il n'y a rien dans la collection, l'id est de 1
    if (id == undefined) {
        return 1;
    }
    return parseInt(id["id"] + 1);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    return res.render("security/login");
});

router.post('/', function(req, res, next) {
    User.findOne({
        login: req.body.login
      }, function(err, user) {
        if (err) throw err;
        if (user.comparePassword(req.body.password)) {
            console.log(user);
            req.session.loggedIn = true;
            req.session.user = user;
            res.status(200);
            return res.redirect('/');
        }
        res.status(400);
        return res.render("security/login", { 
            errors: { error: "Vos identifiants sont incorrects." }
        });
    });
});

module.exports = router;
