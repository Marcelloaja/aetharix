import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import type { DefaultSession } from 'next-auth';

// --- Type Extensions ---
declare module 'next-auth' {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      role?: string;
    } & DefaultSession['user']
  }
}

import { prisma } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email as string;
        const passwordInput = credentials.password as string;

        // SEEDING OTOMATIS: Jika ini pertama kali aplikasi jalan dan db kosong
        const existingUsers = await prisma.user.count();
        if (existingUsers === 0) {
          // Buat akun Admin & Client secara otomatis (hanya untuk testing lokal)
          const hashed = await bcrypt.hash("password123", 10);
          await prisma.user.createMany({
            data: [
              { name: "Administrator", email: "admin@aetharix.com", passwordHash: hashed, role: "ADMIN" },
              { name: "Perusahaan Klien", email: "client@aetharix.com", passwordHash: hashed, role: "CLIENT" }
            ]
          });
        }

        // Cari user di Database
        const user = await prisma.user.findUnique({
          where: { email }
        });

        if (!user) return null;

        // Validasi password enkripsi
        const passwordsMatch = await bcrypt.compare(passwordInput, user.passwordHash);

        if (passwordsMatch) {
          return { id: user.id, name: user.name, email: user.email, role: user.role };
        }
        
        return null;
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login', // Jika tidak login, lempar ke halaman ini
  },
  session: {
    strategy: 'jwt', // Token dikunci rapat di browser
  },
  secret: process.env.AUTH_SECRET || "SUPER_RAHASIA_AETHARIX_2026_YANG_TIDAK_MUNGKIN_DITEMBUS",
});
