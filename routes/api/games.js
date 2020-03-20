const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;


const Game = require("../../models/Game");

router.get('/categories', (req, res) => {
    const categoryAggregate = Game.aggregate([
        { $unwind: { path: "$categories" } },
        {
            $group:
            {
                _id: "$categories.category",
                total: { $sum: 1 }
            }
        },
        { $sort: { total: -1 } }
    ], function ( err, data ) {
        if (err) {
            throw err;
        } else {
            return res.json( data )
        };
    })
});

router.get('/mechanics', (req, res) => {
    const categoryAggregate = Game.aggregate([
        { $unwind: { path: "$mechanics" } },
        {
            $group:
            {
                _id: "$mechanics.mechanic",
                total: { $sum: 1 }
            }
        },
        { $sort: { total: -1 } }
    ], function ( err, data ) {
        if (err) {
            throw err;
        } else {
            return res.json( data )
        };
    })
});

router.get('/:gameId', (req, res) => {
    // const game = Game.find({ _id: new ObjectId(req.params.gameId) });
    Game.findOne({ _id: req.params.gameId }).then(game => {
        console.log(game)
        if (game) return res.json(game);
        else return res.status(422).json({ game: "This game does not exist" });
    });

    // console.log(game);
    // console.log(new ObjectId(req.params.gameId));
})

module.exports = router;
