const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");

router.get('/categories', (req, res) => {
})
// [
//   {
//     $unwind: {
//       path: "$categories"
//     }
//   },
//   {
//     $group: {
//       _id: "$categories.category",
//       total: {
//         $sum: 1
//       }
//     }
//   },
//   {
//     $sort: {
//       total: -1
//     }
//   }
// ];
