import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer, { MinimalSocialsFooter } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WEC | NITK",
  description: "WebClub - NITK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>

      <body className={inter.className + "bg-white dark no-scrollbar"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
