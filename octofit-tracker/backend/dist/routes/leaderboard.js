"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboard_1 = require("../models/leaderboard");
const seedData_1 = require("../data/seedData");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const existing = await leaderboard_1.LeaderboardEntry.find({}).sort({ points: -1 });
    if (existing.length === 0) {
        const seeded = await leaderboard_1.LeaderboardEntry.insertMany(seedData_1.defaultLeaderboardEntries);
        return res.json(seeded);
    }
    return res.json(existing);
});
exports.default = router;
