const express = require("express");
const router = express.Router();

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

module.exports = router;
