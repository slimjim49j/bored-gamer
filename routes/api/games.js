const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");
const { Like } = require("../../models/Like");

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
});

router.get('/:gameId/likes', (req, res) => {
    Like.find({ gameId: req.params.gameId }).then(likes => {
        return res.json(likes);
    });
});



router.get("/index/:pageId", (req, res) => {
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

    const resultsPerPage = +req.query.gameNum || 50;
    const page = req.params.pageId || 1;
    // debugger;
    Game.find(findParams)
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
