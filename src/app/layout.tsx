import type { Metadata } from "next";
import { Share_Tech_Mono, Dela_Gothic_One, Roboto } from "next/font/google";
import "./globals.css";


const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const delaGothincOne = Dela_Gothic_One({
  variable: "--font-dela-gothic-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "3J0s.dev",
  description: "Portfolio of Nico Trejos",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${delaGothincOne.variable} ${roboto.variable}`}>
      <body
        className={`antialiased relative min-h-screen bg-black text-neon font-mono crt`}
      >
        {children}
      </body>
    </html>
  );
}
