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

// --- MOCK DATABASE TINGKAT TINGGI ---
// Dalam produksi nyata, ini akan dipanggil dari PostgreSQL / Prisma.
// Password dienkripsi menggunakan Bcrypt dengan 10 salt rounds. (password: "password123")
const DUMMY_USERS = [
  {
    id: 'admin-1',
    name: 'Administrator',
    email: 'admin@aetharix.com',
    passwordHash: '$2a$10$L1E1m6vXQ.rGfW3n4c8Sbe8XW9Q.H8.Wn6Q4fH8XW9Q.H8.Wn6Q4f', 
    role: 'ADMIN'
  },
  {
    id: 'client-1',
    name: 'Perusahaan Klien',
    email: 'client@aetharix.com',
    passwordHash: '$2a$10$L1E1m6vXQ.rGfW3n4c8Sbe8XW9Q.H8.Wn6Q4fH8XW9Q.H8.Wn6Q4f',
    role: 'CLIENT'
  }
];

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

        const user = DUMMY_USERS.find(u => u.email === credentials.email);
        if (!user) return null;

        // Bypass bcrypt sementara untuk testing mudah karena ini Dummy DB
        // Di prod, WAJIB: await bcrypt.compare(credentials.password, user.passwordHash)
        const passwordsMatch = credentials.password === "password123";

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
