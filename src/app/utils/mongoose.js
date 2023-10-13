import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export async function connectDB() {
  const db = await mongoose.connect(uri);
}
