
import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;


const allowedOrigins = ['https://mern-auth-frontend-0m3x.onrender.com'];

app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.error("CORS blocked origin:", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));



async function startServer() {
  
  await connectDB();

  // API endpoints
  app.get('/', (req, res) => res.send("API working"));
  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter);


  app.listen(port, () => console.log(`Server started on PORT: ${port}`));
}

startServer();
