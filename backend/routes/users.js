var express = require("express");
var router = express.Router();
const db = require("../db/queries");
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");

/* GET users listing. */
// /users/new => db.createUser
router.post("/new", db.createUser);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.get("/isLoggedIn", db.isLoggedIn);
router.post("/logout", loginRequired, db.logoutUser);

module.exports = router;
