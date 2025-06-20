import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Servi store",
  description:
    "Retrouver toutes nos meilleiurs applications mobile pour android!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${arimo.className} antialiased`}>
        <Header />
        <main className="bg-gradient-to-b from-blue-800 via-blue-700 to-blue-500">
          {children}
        </main>
      </body>
    </html>
  );
}
