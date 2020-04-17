const express = require("express");
const router = express.Router();
const passport = require("passport");

const { Like } = require("../../models/Like");

// const jwt = require("jsonwebtoken");

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    debugger
    User.findOne({ username: req.user.username }).then(user => {
        if (!user) {
            errors.username = "This user does not exist";
            return res.status(400).json(errors);
        }

        const newLike = new Like({
            gameId: req.body.gameId,
            dislike: req.body.dislike,
            review: req.body.review,
        })

        user.likes.push(newLike);

        res.json(newLike);
    });
})

module.exports = router;