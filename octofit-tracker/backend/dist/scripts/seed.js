"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Seed the octofit_db database with test data
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
dotenv_1.default.config();
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
async function seed() {
    await mongoose_1.default.connect(mongoUri);
    console.log('Seed the octofit_db database with test data');
    await Promise.all([
        user_1.User.deleteMany({}),
        team_1.Team.deleteMany({}),
        activity_1.Activity.deleteMany({}),
        leaderboard_1.LeaderboardEntry.deleteMany({}),
        workout_1.Workout.deleteMany({}),
    ]);
    const users = await user_1.User.insertMany([
        { name: 'Asha Patel', email: 'asha@example.com', fitnessGoal: 'Improve endurance', level: 'intermediate' },
        { name: 'Jordan Lee', email: 'jordan@example.com', fitnessGoal: 'Build strength', level: 'advanced' },
        { name: 'Mina Chen', email: 'mina@example.com', fitnessGoal: 'Lose weight', level: 'beginner' },
    ]);
    await team_1.Team.insertMany([
        { name: 'Wave Riders', sport: 'Cycling', members: users.slice(0, 2).map((user) => user._id.toString()) },
        { name: 'Peak Performers', sport: 'Running', members: [users[2]._id.toString()] },
    ]);
    await activity_1.Activity.insertMany([
        { userId: users[0]._id.toString(), type: 'run', duration: 35, calories: 320, date: new Date('2026-07-01') },
        { userId: users[1]._id.toString(), type: 'strength', duration: 45, calories: 410, date: new Date('2026-07-02') },
        { userId: users[2]._id.toString(), type: 'yoga', duration: 25, calories: 180, date: new Date('2026-07-03') },
    ]);
    await leaderboard_1.LeaderboardEntry.insertMany([
        { userId: users[0]._id.toString(), points: 1280, streak: 7 },
        { userId: users[1]._id.toString(), points: 1420, streak: 5 },
        { userId: users[2]._id.toString(), points: 980, streak: 3 },
    ]);
    await workout_1.Workout.insertMany([
        { name: 'Morning HIIT', category: 'cardio', duration: 20, difficulty: 'moderate' },
        { name: 'Core Strength', category: 'strength', duration: 30, difficulty: 'hard' },
        { name: 'Recovery Flow', category: 'mobility', duration: 15, difficulty: 'easy' },
    ]);
    console.log('Seed completed successfully');
    await mongoose_1.default.disconnect();
}
seed().catch((error) => {
    console.error('Seed failed', error);
    process.exit(1);
});
