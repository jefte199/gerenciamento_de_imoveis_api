import mongoose from "mongoose";

export const connect = async () => {
  try {
    const uri = "mongodb://localhost/imoveis_api";

    await mongoose.connect(uri, { 
      autoIndex: true
    });
    
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB...");
  } catch (error) {
    console.log("Error disconnecting from MongoDB:", error);
  }
};
