import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito, DM_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

const dm = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Manvay's Summer Intelligence Program",
  description: "30-day cognitive development program for age 7 — scripts, tools, prep & tracker",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${nunito.variable} ${dm.variable}`}>
        {children}
      </body>
    </html>
  );
}
