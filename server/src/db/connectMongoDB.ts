// import mongoose from 'mongoose';

// const MONGO_URL = process.env.MONGO_URL as string;

// if (!MONGO_URL) {
//   throw new Error(
//     'Please define the MONGO_URL environment variable inside .env.local',
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export const connectMongoDB = async () => {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(MONGO_URL, opts)
//       .then((mongooseInstance) => {
//         console.log('✅ Connected to MongoDB');
//         return mongooseInstance;
//       });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// };

// import mongoose from 'mongoose';

// export const connectMongoDB = async () => {
//   try {
//     const mongoUrl = process.env.MONGO_URL;
//     await mongoose.connect(mongoUrl);
//     console.log('✅ MongoDB connection established successfully');
//   } catch (error) {
//     console.error('❌ Failed to connect to MongoDB:', error.message);
//     process.exit(1);
//   }
// };

//////////////////////

import mongoose from 'mongoose';

export const connectMongoDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in .env');
    }

    await mongoose.connect(mongoUri);

    console.log('✅ MongoDB connected');
  } catch (error) {
    if (error instanceof Error) {
      console.error('❌ MongoDB connection error:', error.message);
    } else {
      console.error('❌ An unknown MongoDB error occurred');
    }
    process.exit(1);
  }
};
