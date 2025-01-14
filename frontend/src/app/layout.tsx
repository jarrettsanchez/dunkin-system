import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import ImageHeader from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dunkin Mock System",
  description: "",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header Component */}
        <ImageHeader />
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
