var express = require('express');
var router = express.Router();
const User = require("../model/user");
const sha1 = require("sha1");
const flash = require('connect-flash');
const { arrayBuffer } = require('stream/consumers');

function id_autoincrement(id) {
    //si il n'y a rien dans la collection, l'id est de 1
    if (id == undefined) {
        return 1;
    }
    return parseInt(id["id"] + 1);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (!res.locals.errors){
        return res.status(200).json({ "user": res.locals.user });
    }
    return res.status(400).json({"errors": res.locals.errors });
});

router.post('/', function(req, res, next) {
    User.find({}).sort({_id : -1 }).exec(function(err, user){
        if (err) throw err;
        User.create({
            id: id_autoincrement(user[0]),
            login: req.body.login,
            email: req.body.email,
            password: sha1(req.body.password),
            type: false
        }, (error, user) => {
            if (error && error.name === "ValidationError") {
                let errors = [];
          
                Object.keys(error.errors).forEach((key) => {
                  errors.push(error.errors[key].message);
                });
                res.status(400);
                req.session.errors = errors;
                return res.redirect("/register");
            }
            req.session.loggedIn = true;
            req.session.user = user;
            res.status(200);
            return res.redirect('/');
        })
    });

});
module.exports = router;
