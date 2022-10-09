const express = require('express');
const router = express.Router();
const User = require("../model/user");
const sha1 = require("sha1");
const flash = require('connect-flash');
const session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (!res.locals.errors){
        return res.status(200).json({ "user": res.locals.user });
    }
    return res.status(400).json({"errors": res.locals.errors });
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
        req.session.errors = ["Vos identifiants sont incorrects"];
        return res.redirect('/login');
    });
});

module.exports = router;
