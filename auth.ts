import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import bycrypt from "bcrypt";
import { db } from "./lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return Error("Invalid credentials");
        }
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        const user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          return Error("Invalid credentials");
        }

        const isValidPassword = await bycrypt.compare(
          password as string,
          user.hashedPassword as string
        );

        if (!isValidPassword) {
          return Error("Something went wrong. Please try again.");
        }

        return user;
      },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      try {
        if (user) {
          console.log("JWT creation:", { token, user, account });
          token.sub = user.id;
        }
        return token;
      } catch (err) {
        console.error("JWT error:", err);
        throw err;
      }
    },

    async session({ session, token }) {
      try {
        console.log("Session callback:", { session, token });
        return session;
      } catch (err) {
        console.error("Session error:", err);
        throw err;
      }
    },
  },
});

export default auth;
