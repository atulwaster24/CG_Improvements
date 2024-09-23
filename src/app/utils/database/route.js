import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return mongoose.connection.db;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "connect_geeta",
      useNewUrlParser: true,
      autoIndex: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
    return conn.connection.db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectToDB;
