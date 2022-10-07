const express = require('express');
const router = express.Router();
const User = require("../model/user");
const sha1 = require("sha1");
const flash = require('connect-flash');
const session = require('express-session');

function id_autoincrement(id) {
    //si il n'y a rien dans la collection, l'id est de 1
    if (id == undefined) {
        return 1;
    }
    return parseInt(id["id"] + 1);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (!req.session.flash){
        return res.status(200).json({ "user": res.locals.user });
    }
    console.log(req.session.flash);
    res.status(400).json(req.session.flash);
    req.session.destroy();
});

router.post('/', function(req, res, next) {
    User.findOne({
        login: req.body.login
      }, function(err, user) {
        if (err) throw err;
        if (user && user.comparePassword(req.body.password)) {
            console.log(user);
            req.session.loggedIn = true;
            req.session.user = user;
            res.status(200);
            return res.redirect('/');
        }
        req.flash("error", "Vos identifiants sont incorrects.");
        return res.redirect('/login');
    });
});

module.exports = router;
