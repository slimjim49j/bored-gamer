const express = require("express");
const router = express.Router();

// const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
    debugger
    console.log(req)
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})

module.exports = router;