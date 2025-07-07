import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "notes_db", // optional but explicit
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};
