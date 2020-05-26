const express = require("express");
const router = express.Router();
const passport = require("passport");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const { Like } = require("../../models/Like");

// const jwt = require("jsonwebtoken");

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const user = req.user;
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
    user.save();
    // console.log(newLike)
    newLike.save().then(like => {
        const { username } = user;
        const userId = user._id;
        res.json(Object.assign({ username, userId }, like._doc));
    });
})

// note that updating only seems to update the like in the likes array and not in the collection
router.patch('/:likeId', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOneAndUpdate(
        {likes: { $elemMatch: { _id: req.params.likeId } }},
        { $set: { 'likes.$.review': req.body.review, 'likes.$.dislike': req.body.dislike } },
        { returnOriginal: false },
        (err, user) => {
            if (err) {
                throw err;
            
            } else if (user) {
                const userInfo = {userId: user._id, username: user.username};
                const like = user.likes.id(new ObjectId(req.params.likeId))._doc;
                const formattedLike = Object.assign(userInfo, like);
                res.json(formattedLike);
            } else {
                return res.status(422).json({ like: "This like does not exist" });
            }
        }
    );
})

router.delete('/:likeId', passport.authenticate('jwt', { session: false }), (req, res) => {
    req.user.likes.id(new ObjectId(req.params.likeId)).remove();
    req.user.save();
    res.json({_id: req.params.likeId});
})


module.exports = router;