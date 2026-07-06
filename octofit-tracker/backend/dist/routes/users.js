"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const seedData_1 = require("../data/seedData");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const existing = await user_1.User.find({});
    if (existing.length === 0) {
        const seeded = await user_1.User.insertMany(seedData_1.defaultUsers);
        return res.json(seeded);
    }
    return res.json(existing);
});
router.post('/', async (req, res) => {
    const user = await user_1.User.create(req.body);
    res.status(201).json({ message: 'User created', data: user });
});
exports.default = router;
