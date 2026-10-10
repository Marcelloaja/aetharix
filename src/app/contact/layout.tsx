import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | AETHARIX",
  description: "Konsultasikan kebutuhan infrastruktur IT, kustomisasi produk, atau migrasi sistem perusahaan Anda bersama tim arsitek Aetharix.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
