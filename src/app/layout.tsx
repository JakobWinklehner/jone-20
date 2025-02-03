import type { Metadata } from "next";
import { Geist, Geist_Mono, Chewy } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/components/lenis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Chewy({
  variable: "--font-display",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Jonyy 20 yearyy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
