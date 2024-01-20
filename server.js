import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// routers 
import courseRouter from './routes/courseRouter.js';
import authRouter from './routes/authRouter.js';
import { validateTest } from './middleware/validationMiddleware.js';

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/api/v1/test', (req, res) => {
  // res.send('Hello world');
  // console.log(req);
  res.json({message : `Hello !`});
});

const port = process.env.PORT || 5100;


try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
