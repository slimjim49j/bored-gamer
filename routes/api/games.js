const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");

router.get('/categories', (req, res) => {
    const categoryAggregate = Game.aggregate([
        { $unwind: { path: "$categories" } },
        {
            $group:
            {
                _id: "$categories",
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
                _id: "$mechanics",
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
    Game.findOne({ _id: req.params.gameId }).then(game => {
        if (game) return res.json(game);
        else return res.status(422).json({ game: "This game does not exist" });
    });
})

module.exports = router;
