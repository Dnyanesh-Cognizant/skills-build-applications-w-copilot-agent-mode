import { Router } from 'express';
import { Activity } from '../models/activity';
import { defaultActivities } from '../data/seedData';

const router = Router();

router.get('/', async (_req, res) => {
  const existing = await Activity.find({});
  if (existing.length === 0) {
    const seeded = await Activity.insertMany(defaultActivities);
    return res.json(seeded);
  }
  return res.json(existing);
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({ message: 'Activity logged', data: activity });
});

export default router;
