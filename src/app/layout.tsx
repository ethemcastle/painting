import type { Metadata } from "next";
import {
  Fraunces,
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { PaintCursor } from "@/components/paint-cursor";
import { ColorThemeProvider } from "@/components/color-theme";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-italic",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Painting Your World LLC — Interior & exterior painting, Philadelphia",
  description:
    "Interior & exterior painting, drywall repair, vinyl flooring, trim, doors, and cabinets. Fully insured, 3-year workmanship warranty, free estimates. Philadelphia, PA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSerif.variable} ${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PaintCursor />
        <ColorThemeProvider>{children}</ColorThemeProvider>
      </body>
    </html>
  );
}
