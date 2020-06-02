const express = require("express");
const router = express.Router();

const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// depreacation warning on findOneAndUpdate 
// https://mongoosejs.com/docs/deprecations.html#findandmodify
mongoose.set('useFindAndModify', false);

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            errors.username = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, username: user.username };

                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                }
                            );
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }).then(user => {
        if (!user) {
            errors.username = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, username: user.username };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})

router.get("/:userId", (req, res) => {
    User.findOne({ _id: req.params.userId }).then(user => {
        if (user) {
            return res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                date: user.date,
            });
        } else {
            return res.status(422).json({ user: "This user does not exist" });
        }
    });
});

router.get("/:userId/likes", (req, res) => {
    const dislike = req.query.dislike === "true";
    const userId = req.params.userId;

    User.aggregate(
      [
        {
          $match: {
            _id: new ObjectId(userId),
          },
        },
        {
          $unwind: {
            path: "$likes",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $match: {
            "likes.dislike": dislike,
          },
        },
        {
          $lookup: {
            from: "games",
            localField: "likes.gameId",
            foreignField: "_id",
            as: "game",
          },
        },
      ],
      function (err, data) {
        if (err) {
          throw err;
        } else {
            const formattedData = data.map(user => {
                const newLike = {};
                newLike.review = user.likes.review;
                newLike.game = user.game[0];
                return newLike;
            });
          return res.json(formattedData);
        }
      }
    );
})

module.exports = router;