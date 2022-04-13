import mongoose from 'mongoose';
import 'dotenv/config';

async function connect(): Promise<void> {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log('database connected!');
  } catch (error) {
    console.log(error);
  }
}

export default connect;
