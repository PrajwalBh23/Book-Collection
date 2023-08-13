// It's only for checking connection with database or not
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
