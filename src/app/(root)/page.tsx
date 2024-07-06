"use client";

import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineShield, MdTravelExplore } from "react-icons/md";
import Link from "next/link";
import {  FaDiscord } from "react-icons/fa6";
import { BsStarFill, BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import Features from "./features-section/features";
import Product from "./product-section/product";
import { TbShield } from "react-icons/tb";
import Reviews from "./reviews-section/Reviews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <section className="relative bg-black overflow-hidden">
        {/* Adicionando o padrão de pontos */}

        <div className="relative z-10">
          <div className="absolute inset-0 flex justify-center items-center space-x-4 space-y-4">
            {/* Adicionando ícones de estrelas no fundo com animações */}
            <BsStarFill className="text-red-500 opacity-50 absolute top-10 left-10 text-xl animate-spin-slow" />
            <BsStars className="text-red-500 opacity-50 absolute top-20 left-1/3 text-2xl animate-pulse" />
            <BsStars className="text-red-500 opacity-50 absolute top-1/2 left-1/4 text-xl animate-bounce" />
            <BsStars className="text-red-500 opacity-50 absolute top-5 right-1/4 text-3xl animate-spin" />
            <WiStars className="text-red-500 opacity-50 absolute top-1/4 right-1/4 text-3xl animate-spin-slow" />
            <WiStars className="text-red-500 opacity-50 absolute top-2/3 right-1/3 text-2xl animate-bounce" />
          </div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl items-center justify-center text-center lg:py-16 lg:px-12">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="font-inter text-sm font-semibold">
                Avaliado em 4.9/5
              </h1>
              <span className="bg-[#171717] py-2 px-2 rounded-xl flex items-center gap-1">
                <TiStarFullOutline className="text-yellow-500" />
                <TiStarFullOutline className="text-yellow-500" />
                <TiStarFullOutline className="text-yellow-500" />
                <TiStarFullOutline className="text-yellow-500" />
                <TiStarFullOutline className="text-yellow-500" />
                <p className="text-[#fff9] text-xs font-dmsans font-normal">
                  (3.219)
                </p>
              </span>
            </div>
            <div className="flex flex-col justify-center mx-auto group">
              <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-7xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
                Ofertas Seguras{" "}
                <TbShield className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-50" />{" "}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
                Contas Confiáveis.
              </h1>
            </div>
            <p className="mb-8 text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto">
              Desbloqueie o seu potencial de jogo com nossas contas de Valorant,
              garantindo a sua segurança e qualidade em cada transação.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 items-center">
              <Link
                href="#"
                className="py-3 px-4 bg-[#7289da] text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Comunidade Discord <FaDiscord className="h-4 w-4" />
              </Link>
              <Link
                href="/categorias/"
                className="py-3 px-4 bg-red-500 text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Explorar Contas <MdTravelExplore className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative mt-12 flex justify-center">
              {/* Background Image with Blur */}
              <div className="absolute w-screen bottom-36">
                <img
                  src="https://cdn.prod.website-files.com/65fb10cecbf4fc38c013b91a/65fdb2dfabfeecb0b8837267_power-your-ideas-bg-image-intellitech-x-webflow-template-p-1600.jpg"
                  alt="Background"
                  className="w-full h-full object-cover blur-lg opacity-35"
                />
              </div>

              {/* Main Image Container */}
              <div className="relative flex justify-center">
                {/* Left Side Image */}
                <div className="absolute -left-12 top-36 transform -translate-y-1/2 z-50 opacity-100">
                  <img
                    src="https://images-ext-1.discordapp.net/external/pUc-b8PpxyN8fVbGGrO75MX-F_GoxA8xuC9o_p_SnNg/https/cdn.prod.website-files.com/65fb10cecbf4fc38c013b91a/65fdd99ae279671e66182c7c_power-your-ideas-through-ai-bottom-left-image-intellitech-x-webflow-template-p-500.png?format=webp&quality=lossless&width=404&height=566"
                    className="h-80 w-auto rounded-xl hidden lg:block"
                    alt="Left Side"
                  />
                </div>

                {/* Main Image */}
                <img
                  src="/inventory/inventory_1.png"
                  className="rounded-2xl w-10/12 max-w-7xl max-h-[40rem] relative z-10"
                  alt="Main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features/>
      <Product/>
      <Reviews/>
    </>
  );
}
