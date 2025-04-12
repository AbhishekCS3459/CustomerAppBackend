import express from 'express';
import userRoutes from './routes/user.route';

const app = express();

app.use(express.json());

// welcome route
app.get('/', (_, res) => {
  res.send(`
    <h1>Welcome to the User Service of Pegman</h1>
    <p>Use the API to manage users.</p>
  `);
});
// Health check
//@ts-ignore
app.get('/health', (_, res) => res.send({ status: 'OK ✅' }));

// API Routes
app.use('/api/users', userRoutes);

export default app;


