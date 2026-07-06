"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_1 = require("../models/team");
const seedData_1 = require("../data/seedData");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const existing = await team_1.Team.find({});
    if (existing.length === 0) {
        const seeded = await team_1.Team.insertMany(seedData_1.defaultTeams);
        return res.json(seeded);
    }
    return res.json(existing);
});
router.post('/', async (req, res) => {
    const team = await team_1.Team.create(req.body);
    res.status(201).json({ message: 'Team created', data: team });
});
exports.default = router;
