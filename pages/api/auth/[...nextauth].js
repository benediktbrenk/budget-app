import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession } from "next-auth/react";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "fisch" &&
          credentials.password === "fisch"
        ) {
          return {
            name: "Max",
            email: "test@example.com",
          };
        } else if (
          credentials.username === "user" &&
          credentials.password === "user"
        ) {
          return {
            name: "User",
            email: "user@example.com",
          };
        } else {
          return null;
        }
      },
    }),

    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
