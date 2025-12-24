import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const coolvetica = localFont({
  src: "../public/fonts/coolvetica.ttf",
  variable: "--font-coolvetica",
  display: "swap",
});

const montserrat = localFont({
  src: "../public/fonts/montserrat.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Portfolio",
  description: "Group Internship Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${coolvetica.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
