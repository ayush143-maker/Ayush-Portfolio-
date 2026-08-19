import type { Metadata } from "next";
import { Fraunces, Caveat, Space_Mono } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand" });
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AYUSH — portfolio, torn open",
  description:
    "18. still figuring it out. still building. tear the paper to get in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${hand.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
