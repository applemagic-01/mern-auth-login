
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB Connected!");

        mongoose.connection.on("connected", () => {
            console.log("Mongoose connected to DB");
        });

        mongoose.connection.on("error", (err) => {
            console.error(`Mongoose connection error: ${err}`);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Mongoose disconnected");
        });
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
        process.exit(1); // Exit the process on connection failure
    }
};

export default connectDB;