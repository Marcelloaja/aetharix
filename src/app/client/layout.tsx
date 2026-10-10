import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ClientLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  // Jika admin iseng masuk ke /client, kembalikan ke /admin
  if (session.user?.role === "ADMIN") {
    redirect("/admin/dashboard");
  }

  return <>{children}</>;
}
