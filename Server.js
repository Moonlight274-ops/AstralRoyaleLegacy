const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let player = {
    arena: 1,
    league: "bronze",
    gems: 100,
    gold: 1000
};

app.get("/", (req, res) => {
    res.send("Nextel Clash Royale Private Server Running 🔥");
});

app.get("/setarena/:arena", (req, res) => {
    player.arena = req.params.arena;
    res.send(`Arena set to ${player.arena}`);
});

app.get("/setleague/:league", (req, res) => {
    player.league = req.params.league;
    res.send(`League set to ${player.league}`);
});

app.get("/gems/:amount", (req, res) => {
    player.gems = req.params.amount;
    res.send(`Gems set to ${player.gems}`);
});

app.get("/max", (req, res) => {
    player = {
        arena: 15,
        league: "ultimate champion",
        gems: 999999,
        gold: 999999
    };
    res.send("Max account activated 🔥");
});

app.get("/player", (req, res) => {
    res.json(player);
});

app.listen(PORT, () => {
    console.log(`Nextel Royale running on ${PORT}`);
});
