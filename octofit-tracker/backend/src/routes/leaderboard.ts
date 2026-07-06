import { Router } from 'express';
import { LeaderboardEntry } from '../models/leaderboard';
import { defaultLeaderboardEntries } from '../data/seedData';

const router = Router();

router.get('/', async (_req, res) => {
  const existing = await LeaderboardEntry.find({}).sort({ points: -1 });
  if (existing.length === 0) {
    const seeded = await LeaderboardEntry.insertMany(defaultLeaderboardEntries);
    return res.json(seeded);
  }
  return res.json(existing);
});

export default router;
