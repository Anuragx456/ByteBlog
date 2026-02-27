import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_BASE_URL, // Your backend URL
});

export const { signIn, signUp, useSession, signOut } = authClient;