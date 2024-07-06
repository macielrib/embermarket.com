import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ef4444", // text-red-500 in hex
};

export const metadata: Metadata = {
  title: "Embermarket — Contas Exclusivas de Valorant",
  description: "Encontre as melhores contas de Valorant à venda na Embermarket. Contas exclusivas, seguras e prontas para jogar!",
  alternates: {
    canonical: 'https://embermarket.com.br'
  },
  authors: [{ name: 'Embermarket', url: "https://embermarket.com.br" }],
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "embermarket",
    "contas valorant",
    "comprar contas valorant",
    "vendas de contas valorant",
    "contas exclusivas valorant",
    "contas seguras valorant",
    "loja de contas valorant",
    "contas de jogos",
    "valorant",
    "comprar contas de jogos",
    "contas de valorant prontas",
  ],
  openGraph: {
    title: "Embermarket — Contas Exclusivas de Valorant",
    siteName: "Embermarket",
    url: "https://embermarket.com.br",
    locale: "pt_BR",
    description: "Encontre as melhores contas de Valorant à venda na Embermarket. Contas exclusivas, seguras e prontas para jogar!",
    images: ["/banner/embermarket.png"]
  },
  twitter: {
    title: "Embermarket — Contas Exclusivas de Valorant",
    description: "Encontre as melhores contas de Valorant à venda na Embermarket. Contas exclusivas, seguras e prontas para jogar!",
    card: "summary_large_image",
    images: ["/banner/embermarket.png"],
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
          <Footer></Footer>
        </body>
      </html>
    </>
  );
}
