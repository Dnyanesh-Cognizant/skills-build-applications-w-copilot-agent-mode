"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultWorkouts = exports.defaultLeaderboardEntries = exports.defaultActivities = exports.defaultTeams = exports.defaultUsers = void 0;
exports.defaultUsers = [
    { name: 'Asha Patel', email: 'asha@example.com', fitnessGoal: 'Improve endurance', level: 'intermediate' },
    { name: 'Jordan Lee', email: 'jordan@example.com', fitnessGoal: 'Build strength', level: 'advanced' },
    { name: 'Mina Chen', email: 'mina@example.com', fitnessGoal: 'Lose weight', level: 'beginner' },
];
exports.defaultTeams = [
    { name: 'Wave Riders', sport: 'Cycling', members: ['Asha Patel', 'Jordan Lee'] },
    { name: 'Peak Performers', sport: 'Running', members: ['Mina Chen'] },
];
exports.defaultActivities = [
    { userId: 'Asha Patel', type: 'run', duration: 35, calories: 320, date: new Date('2026-07-01') },
    { userId: 'Jordan Lee', type: 'strength', duration: 45, calories: 410, date: new Date('2026-07-02') },
    { userId: 'Mina Chen', type: 'yoga', duration: 25, calories: 180, date: new Date('2026-07-03') },
];
exports.defaultLeaderboardEntries = [
    { userId: 'Jordan Lee', points: 1420, streak: 5 },
    { userId: 'Asha Patel', points: 1280, streak: 7 },
    { userId: 'Mina Chen', points: 980, streak: 3 },
];
exports.defaultWorkouts = [
    { name: 'Morning HIIT', category: 'cardio', duration: 20, difficulty: 'moderate' },
    { name: 'Core Strength', category: 'strength', duration: 30, difficulty: 'hard' },
    { name: 'Recovery Flow', category: 'mobility', duration: 15, difficulty: 'easy' },
];
