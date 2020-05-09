const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");
const User = require("../../models/User");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
// const { Like } = require("../../models/Like");

router.get('/categories', (req, res) => {
    Game.aggregate([
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
    Game.aggregate([
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
        if (err) throw err;
        else return res.json(data);
    });
});

router.get('/:gameId', (req, res) => {
    Game.findOne({ _id: req.params.gameId }).then(game => {
        if (game) return res.json(game);
        else return res.status(422).json({ game: "This game does not exist" });
    });
});

router.get('/:gameId/likes', (req, res) => {
    User.aggregate([
        {
            '$match': {
                'likes.gameId': new ObjectId('5e766e958c93f01b4c3010bc')
            }
        }, {
            '$project': {
                'username': 1,
                'likes': {
                    '$filter': {
                        'input': '$likes',
                        'as': 'like',
                        'cond': {
                            '$eq': [
                                '$$like.gameId', new ObjectId(req.params.gameId)
                            ]
                        }
                    }
                }
            }
        }
    ], function (err, data) {
        if (err) throw err;
        else return res.json(data);
    })
});



router.get("/index/:pageId", (req, res) => {
    // setup find arguments
    let findParams = {};
    if (req.query.categories) {
        findParams.categories = {
            $all: (req.query.categories.split("*"))
        };
    }
    if (req.query.mechanics) {
        findParams.mechanics = {
            $all: (req.query.mechanics.split("*"))
        };
    }

    // setup sort arguments
    let sort = {};
    const order = (req.query.order ? parseInt(req.query.order) : 1);
    if (req.query.sort) sort[req.query.sort] = order;
    else sort["_id"] = order;

    const resultsPerPage = +req.query.gameNum || 50;
    const page = req.params.pageId || 1;
    // debugger;
    Game.find(findParams)
    .sort(sort)
    .skip(resultsPerPage * page - resultsPerPage)
    .limit(resultsPerPage)
    .then(games => {
        Game.count(findParams).then(gameCount => {
            // debugger
            return res.json({games, gameCount});
        })
    })
    .catch(err => console.log(err));
});

module.exports = router;
