import { Router } from 'express';
import { Workout } from '../models/workout';
import { defaultWorkouts } from '../data/seedData';

const router = Router();

router.get('/', async (_req, res) => {
  const existing = await Workout.find({});
  if (existing.length === 0) {
    const seeded = await Workout.insertMany(defaultWorkouts);
    return res.json(seeded);
  }
  return res.json(existing);
});

router.post('/', async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json({ message: 'Workout suggestion created', data: workout });
});

export default router;
