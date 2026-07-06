"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workout_1 = require("../models/workout");
const seedData_1 = require("../data/seedData");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const existing = await workout_1.Workout.find({});
    if (existing.length === 0) {
        const seeded = await workout_1.Workout.insertMany(seedData_1.defaultWorkouts);
        return res.json(seeded);
    }
    return res.json(existing);
});
router.post('/', async (req, res) => {
    const workout = await workout_1.Workout.create(req.body);
    res.status(201).json({ message: 'Workout suggestion created', data: workout });
});
exports.default = router;
