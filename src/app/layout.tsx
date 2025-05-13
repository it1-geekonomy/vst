// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

// Load Google Fonts using next/font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Add Poppins font (with full weight range)
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "VST Group",
  description: "Building Tomorrow on a Century of Trust",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
