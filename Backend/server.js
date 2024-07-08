import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'; 


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();


app.use(cors());

// app.use(cors({
//   origin: ["https://cake-crm-frontend.vercel.app"],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));



app.use(express.json());
app.use(cookieParser());

// Use user routes
app.use('/api/users', userRoutes);

// Define routes (Example)
app.get('/api', (req, res) => {
  res.send('API is running...');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/my-crm-app/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'my-crm-app', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
