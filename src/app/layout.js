import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Club, NITK",
  description: "Web Enthusiasts Club, NITK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>{children}</body>
    </html>
  );
}
