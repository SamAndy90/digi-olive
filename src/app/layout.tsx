import type { Metadata } from "next";
import { Inconsolata, Inter, Karla } from "next/font/google";
import localFont from "next/font/local";

import { FAQS } from "components/FAQS";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

import "keen-slider/keen-slider.min.css";

import "styles/globals.css";

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inconsolata = Inconsolata({
  weight: ["400", "900"],
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

const karla = Karla({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const helvetica = localFont({
  src: [
    {
      path: "../styles/fonts/helveticaneue-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/helveticaneue.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/helveticaneue-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-helvetica",
});

const sfpro = localFont({
  src: [
    {
      path: "../styles/fonts/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/SFProDisplay-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sfpro",
});

const hiragino = localFont({
  src: [
    {
      path: "../styles/fonts/hiragino-kaku-gothic-std-w8.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-hiragino",
});

export const metadata: Metadata = {
  title: {
    default: "DIGI OLIVE",
    template: "%s | DIGI OLIVE",
  },
  description: "Welcome to DIGI OLIVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={"en"}
      className={`${helvetica.variable} ${inter.variable} ${inconsolata.variable} ${karla.variable} ${sfpro.variable} ${hiragino.variable} h-full scroll-smooth text-black`}
    >
      <body className={"relative h-full scroll-smooth"}>
        <div className={"text-do flex h-full flex-col font-helvetica"}>
          <Header />
          <main className={"flex-1"}>{children}</main>
          <FAQS />
          <Footer />
        </div>
      </body>
    </html>
  );
}
