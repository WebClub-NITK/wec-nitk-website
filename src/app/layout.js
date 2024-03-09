import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WEC - NITK",
  description: "Web Club - NITK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
