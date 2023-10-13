import { connect } from "mongoose";

const uri = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    const { connection } = await connect(uri);
    if (connection.readyState === 1) {
      console.log("MongoDB Connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};