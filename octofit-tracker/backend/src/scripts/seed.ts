// Seed the octofit_db database with test data
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { LeaderboardEntry } from '../models/leaderboard';
import { Workout } from '../models/workout';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  await mongoose.connect(mongoUri);
  console.log('Seed the octofit_db database with test data');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    { name: 'Asha Patel', email: 'asha@example.com', fitnessGoal: 'Improve endurance', level: 'intermediate' },
    { name: 'Jordan Lee', email: 'jordan@example.com', fitnessGoal: 'Build strength', level: 'advanced' },
    { name: 'Mina Chen', email: 'mina@example.com', fitnessGoal: 'Lose weight', level: 'beginner' },
  ]);

  await Team.insertMany([
    { name: 'Wave Riders', sport: 'Cycling', members: users.slice(0, 2).map((user) => user._id.toString()) },
    { name: 'Peak Performers', sport: 'Running', members: [users[2]._id.toString()] },
  ]);

  await Activity.insertMany([
    { userId: users[0]._id.toString(), type: 'run', duration: 35, calories: 320, date: new Date('2026-07-01') },
    { userId: users[1]._id.toString(), type: 'strength', duration: 45, calories: 410, date: new Date('2026-07-02') },
    { userId: users[2]._id.toString(), type: 'yoga', duration: 25, calories: 180, date: new Date('2026-07-03') },
  ]);

  await LeaderboardEntry.insertMany([
    { userId: users[0]._id.toString(), points: 1280, streak: 7 },
    { userId: users[1]._id.toString(), points: 1420, streak: 5 },
    { userId: users[2]._id.toString(), points: 980, streak: 3 },
  ]);

  await Workout.insertMany([
    { name: 'Morning HIIT', category: 'cardio', duration: 20, difficulty: 'moderate' },
    { name: 'Core Strength', category: 'strength', duration: 30, difficulty: 'hard' },
    { name: 'Recovery Flow', category: 'mobility', duration: 15, difficulty: 'easy' },
  ]);

  console.log('Seed completed successfully');
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seed failed', error);
  process.exit(1);
});
