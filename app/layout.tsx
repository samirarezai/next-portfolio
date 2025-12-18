import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const keygen = localFont({
  src: "../fonts/Keygen.otf",
  variable: "--font-keygen",
});

export const metadata: Metadata = {
  title: "Samira Rezayi | Senior Frontend Dev",
  description: "Senior Frontend Developer with 7+ years of experience in crafting modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${keygen.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
