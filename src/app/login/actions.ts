"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    // Redirection ditangani otomatis oleh NextAuth berdasarkan middleware / callback
    await signIn("credentials", formData, { redirectTo: "/login" }); // Kita biarkan middleware yg men-redirect
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Email atau password salah. Coba lagi."
        default:
          return "Terjadi kesalahan otentikasi."
      }
    }
    throw error // Harus di-throw kembali agar Next.js redirect berfungsi
  }
}
