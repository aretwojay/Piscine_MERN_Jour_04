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
    return res.render("security/register");
});

router.post('/', function(req, res, next) {
    User.find({}).sort({_id : -1 }).exec(function(err, user){
        User.create({
            id: id_autoincrement(user[0]),
            login: req.body.login,
            email: req.body.email,
            password: sha1(req.body.password),
            type: false
        }, (error, user) => {
            console.log(error);
            if (error && error.name === "ValidationError") {
                let errors = {};
          
                Object.keys(error.errors).forEach((key) => {
                  errors[key] = error.errors[key].message;
                });
                res.status(400);
                console.log(errors);
                return res.render("security/register", { errors: errors});
            }
            req.session.loggedIn = true;
            req.session.user = user;
            res.status(200);
            return res.redirect('/');
        })
    });

});
module.exports = router;
