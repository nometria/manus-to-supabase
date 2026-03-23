import express from 'express';
import { db } from './db';
import { users } from '../shared/schema';

const app = express();
app.use(express.json());

// Example route
app.get('/api/users', async (req, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
