
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer, { MinimalSocialsFooter } from "@/components/footer";
import {Metadata, ResolvingMetadata} from 'next'


export const metadata = {
  metadataBase: new URL('https://webclub.nitk.ac.in'),
  title: "WebClub NITK",
  description: "A group of passionate computer science students helping the community of NITK",
  openGraph: {
    title: "WebClub NITK",
    description: "A group of passionate computer science students helping the community of NITK",
    url: "https://webclub.nitk.ac.in",
    siteName: "WebClub NITK",
    images: [
      {
        url: "https://webclub.nitk.ac.in/default-og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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

      <body className={"bg-white dark no-scrollbar "}>
     
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        
      </body>
    </html>
  );
}
