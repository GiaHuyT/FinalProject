import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected!'))
.catch(err => console.error('❌ MongoDB connection failed:', err.message));

app.get('/', (req, res) => res.send('Server đang chạy ngon rồi 🚀'));

// Routes auth
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
