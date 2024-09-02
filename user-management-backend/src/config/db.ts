import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI as string;
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('Unknown error occurred during MongoDB connection');
    }
    process.exit(1);
  }
};

export default connectDB;
