import mongoose from "mongoose";
import dns from "dns";



const connectDB = async () => {
    try {
        // Fix for querySrv ECONNREFUSED issue on some networks/DNS
        dns.setServers(['8.8.8.8', '8.8.4.4']);

        mongoose.connection.on('connected', () => console.log("Database Connected"))

        const uri = process.env.MONGODB_URI;
        if (!uri || uri.includes('<PASSWORD>')) {
            console.log("Error: Please replace <PASSWORD> in your .env file with your actual MongoDB password.");
            return;
        }

        await mongoose.connect(`${uri}/byteblog`)
    } catch (error) {
        console.log("Database connection error:", error.message);
    }
}

export default connectDB;