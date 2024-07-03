import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {

  themeColor: "#4f46e5",
}

export const metadata: Metadata = {
  title: "Spacefy — Criação de Sites e Serviços Web",
  description: "A Spacefy oferece serviços de criação de sites inovadores para destacar seu negócio no mercado digital.",
  alternates: {
    canonical: 'https://spacefy.com.br'
  },
  authors: [{ name: 'Spacefy Oficial', url: "https://spacefy.com.br" }],
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "spacefy",
    "spacefy sites",
    "spacefy agência",
    "agência digital",
    "serviços web",
    "agência de sites",
    "criação de sites",
    "sites modernos",
    "sites inovadores",
    "desenvolvimento web",
  ],
  openGraph: {
    title: "Spacefy — Criação de Sites e Serviços Web",
    siteName: "Spacefy",
    url: "https://spacefy.com.br",
    locale: "pt_BR",
    description: "A Spacefy oferece serviços de criação de sites inovadores para destacar seu negócio no mercado digital.",
    images: ["https://i.imgur.com/AFFPb4v.png"]
  },
  twitter: {
    title: "Spacefy — Criação de Sites e Serviços Web",
    description: "A Spacefy oferece serviços de criação de sites inovadores para destacar seu negócio no mercado digital.",
    card: "summary_large_image",
    images: ["https://i.imgur.com/AFFPb4v.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-br">
      
        <body className={inter.className}>
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </>
  );
}
