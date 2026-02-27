import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import mongoose from "mongoose";

let auth;

export const initAuth = () => {
    if (!auth) {
        auth = betterAuth({
            database: mongodbAdapter(mongoose.connection.db),
            emailAndPassword: {
                enabled: true
            },
            trustedOrigins: ["http://localhost:5173", "http://localhost:5174"],
            // Add other providers here (Google, GitHub, etc.) if needed
        });
    }
    return auth;
};