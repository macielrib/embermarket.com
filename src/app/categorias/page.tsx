import Link from "next/link";
import { LuCopyCheck } from "react-icons/lu";
import { TbExternalLink, TbShoppingCartCheck } from "react-icons/tb";

const Categories = () => {
  return (
    <>
      <section className="bg-black py-6 px-6">
        <div className="flex flex-col justify-center mx-auto group relative">
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
            Contas Verificadas <TbShoppingCartCheck className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-5"/>{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
            Qualidade Garantida.
          </h1>
          <p className="mb-8 mt-4 text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto ">
          Aqui você pode comprar <span className="text-red-500">com confiança.</span> Todas as contas são verificadas e garantem a <span className="text-red-500">melhor experiência.</span>
          </p>
        
        </div>
        <div className=" w-full flex flex-wrap items-center justify-center gap-8 ">
          <div className="max-w-sm w-full bg-[#0A0A0D] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
            <div>
              <img
                className="object-cover h-64 w-full"
                src="/backgrounds/neon.jpg"
                alt="Categoria Contas Full-Acesso"
              />
            </div>

            <Link href="/categorias/full-acesso">
              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-dmsans font-bold group-hover:text-red-500 transition duration-300">
                  Contas Full-Acesso
                </h2>
                <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                  Categoria amplamente recomendada por sua segurança em contas.
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-4 px-4">
                <div className="flex items-center gap-2">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    Dados de Segurança
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    80-160+ Skins em Contas
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-4 p-4 border-t border-[#111]">
              <Link className="w-full flex justify-between items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300" href='categorias/full-acesso'>
                <span className="font-dmsans font-semibold text-lg">
                  Ver Categoria
                </span>
                <TbExternalLink className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="max-w-sm w-full bg-[#0A0A0D] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
            <div>
              <img
                className="object-cover h-64 w-full"
                src="/backgrounds/omen.jpg"
                alt="Converse sneakers"
              />
            </div>

            <Link href="/produtos">
              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-dmsans font-bold group-hover:text-red-500 transition duration-300">
                  Categoria Non Full Access (NFA)
                </h2>
                <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                  Categoria amplamente recomendada por sua segurança em contas.
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-4 px-4">
                <div className="flex items-center gap-2">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    Dados de Segurança
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    80-160+ Skins em Contas
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-4 p-4 border-t border-[#111]">
              <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300">
                <span className="font-dmsans font-semibold text-lg">
                  Ver Categoria
                </span>
                <TbExternalLink className="text-xl" />
              </button>
            </div>
          </div>
          <div className="max-w-sm w-full bg-[#0A0A0D] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
            <div>
              <img
                className="object-cover h-64 w-full"
                src="/backgrounds/omen.jpg"
                alt="Converse sneakers"
              />
            </div>

            <Link href="/produtos">
              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-dmsans font-bold group-hover:text-red-500 transition duration-300">
                  Categoria Non Full Access (NFA)
                </h2>
                <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                  Categoria amplamente recomendada por sua segurança em contas.
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-4 px-4">
                <div className="flex items-center gap-2">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    Dados de Segurança
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    80-160+ Skins em Contas
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-4 p-4 border-t border-[#111]">
              <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300">
                <span className="font-dmsans font-semibold text-lg">
                  Ver Categoria
                </span>
                <TbExternalLink className="text-xl" />
              </button>
            </div>
          </div>
          <div className="max-w-sm w-full bg-[#0A0A0D] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
            <div>
              <img
                className="object-cover h-64 w-full"
                src="/backgrounds/omen.jpg"
                alt="Converse sneakers"
              />
            </div>

            <Link href="/produtos">
              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-dmsans font-bold group-hover:text-red-500 transition duration-300">
                  Categoria Non Full Access (NFA)
                </h2>
                <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                  Categoria amplamente recomendada por sua segurança em contas.
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-4 px-4">
                <div className="flex items-center gap-2">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    Dados de Segurança
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    80-160+ Skins em Contas
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-4 p-4 border-t border-[#111]">
              <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300">
                <span className="font-dmsans font-semibold text-lg">
                  Ver Categoria
                </span>
                <TbExternalLink className="text-xl" />
              </button>
            </div>
          </div>
          <div className="max-w-sm w-full bg-[#0A0A0D] rounded-xl shadow-xl overflow-hidden border border-solid border-[#111] transition duration-300 hover:-translate-y-2 group">
            <div>
              <img
                className="object-cover h-64 w-full"
                src="/backgrounds/triple.jpg"
                alt="Converse sneakers"
              />
            </div>

            <Link href="/produtos">
              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-dmsans font-bold group-hover:text-red-500 transition duration-300">
                  Categorias de Elo
                </h2>
                <span className="font-normal text-dmsans text-sm text-[#fff9] mb-2">
                  Categoria amplamente recomendada por sua segurança em contas.
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-4 px-4">
                <div className="flex items-center gap-2">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    Dados de Segurança
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <LuCopyCheck className="text-red-500" />
                  <span className="text-sm font-dmsans font-normal text-[#fff9]">
                    80-160+ Skins em Contas
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-4 p-4 border-t border-[#111]">
              <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:text-red-500 text-white transition duration-300">
                <span className="font-dmsans font-semibold text-lg">
                  Ver Categoria
                </span>
                <TbExternalLink className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
