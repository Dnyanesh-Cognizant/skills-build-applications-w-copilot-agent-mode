import { Router } from 'express';
import { User } from '../models/user';
import { defaultUsers } from '../data/seedData';

const router = Router();

router.get('/', async (_req, res) => {
  const existing = await User.find({});
  if (existing.length === 0) {
    const seeded = await User.insertMany(defaultUsers);
    return res.json(seeded);
  }
  return res.json(existing);
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ message: 'User created', data: user });
});

export default router;
