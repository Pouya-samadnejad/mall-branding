import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { menuItems } from "@/const/menu";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const iranyekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Mall Branding",
    template: "%s | Mall Branding",
  },
  description: "Modern mall branding and advertising website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${iranyekan.className} antialiased`}>
        <Header menuItems={menuItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
