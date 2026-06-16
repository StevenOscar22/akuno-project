import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", // alamat frontend React
    credentials: true
}));

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});