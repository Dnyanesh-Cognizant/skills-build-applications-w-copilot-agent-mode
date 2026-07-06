import { Router } from 'express';
import { Team } from '../models/team';
import { defaultTeams } from '../data/seedData';

const router = Router();

router.get('/', async (_req, res) => {
  const existing = await Team.find({});
  if (existing.length === 0) {
    const seeded = await Team.insertMany(defaultTeams);
    return res.json(seeded);
  }
  return res.json(existing);
});

router.post('/', async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json({ message: 'Team created', data: team });
});

export default router;
