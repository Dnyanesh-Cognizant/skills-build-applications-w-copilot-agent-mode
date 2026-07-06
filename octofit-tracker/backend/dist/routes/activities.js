"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = require("../models/activity");
const seedData_1 = require("../data/seedData");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const existing = await activity_1.Activity.find({});
    if (existing.length === 0) {
        const seeded = await activity_1.Activity.insertMany(seedData_1.defaultActivities);
        return res.json(seeded);
    }
    return res.json(existing);
});
router.post('/', async (req, res) => {
    const activity = await activity_1.Activity.create(req.body);
    res.status(201).json({ message: 'Activity logged', data: activity });
});
exports.default = router;
