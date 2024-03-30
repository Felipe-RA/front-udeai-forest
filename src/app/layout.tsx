import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link'; 

export const metadata: Metadata = {
  title: "UdeAIForest",
  description: "Discover the Forest with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
      <header className="bg-[#336648] text-white p-4 flex justify-between items-center">
        <Link href="/landing">
          UdeAIForest
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/login" className="hover:text-gray-300">Log In</Link></li>
            <li><Link href="/register" className="hover:text-gray-300">Register</Link></li>
          </ul>
        </nav>
      </header>
        <main className="flex-grow p-4">
          {children}
        </main>
        <footer className="bg-[#336648] text-white p-4 text-center">
          UdeAIForest ©{new Date().getFullYear()} Created by You
        </footer>
      </body>
    </html>
  );
}
