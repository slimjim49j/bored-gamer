const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const games = require("./routes/api/games");
// const User = require("./models/User");
const Game = require("./models/Game");
const passport = require("passport");

const bodyParser = require("body-parser");

// passport
app.use(passport.initialize());
require("./config/passport")(passport);

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/games", games);

// seeding games route, only run once
// const seeds = require("./seeds/seeds.json");
// const loadSeeds = require("./seeds/load_seeds");

// app.get("/api/seed", (req, res) => {
//     console.log("hit")
//     loadSeeds(seeds);
// })

const port = process.env.PORT || 5000;
// debugger;
app.listen(port, () => console.log(`Server is running on port ${port}`));