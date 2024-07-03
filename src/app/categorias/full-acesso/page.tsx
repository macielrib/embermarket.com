import Tooltip from "@/app/components/ui/Tooltip";
import Link from "next/link";
import { TbShoppingCartPlus } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { TbShoppingCartCheck } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import { RiBankFill } from "react-icons/ri";
import { TbShield } from "react-icons/tb";
import { TbWorldCheck } from "react-icons/tb";

const FullAcesso = () => {
  return (
    <>
      <section className="bg-black py-6 px-6">
        <div className="flex flex-col justify-center mx-auto group relative">
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
            Contas Verificadas{" "}
            <TbShoppingCartCheck className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-5" />{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
            Qualidade Garantida.
          </h1>
          <p className="mb-8 mt-4 text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto ">
            Aqui você pode comprar{" "}
            <span className="text-red-500">com confiança.</span> Todas as contas
            são verificadas e garantem a{" "}
            <span className="text-red-500">melhor experiência.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
          <div className="bg-[#080808] border border-solid border-[#222] rounded-2xl shadow-lg p-8 ">
            <div className="relative overflow-hidden group transition  border border-solid border-[#333] rounded-xl">
              <img
                className="object-cover w-full max-h-56 rounded-xl"
                src="https://media.discordapp.net/attachments/1252999386808717432/1257795930506395738/image-15.png?ex=66865dfe&is=66850c7e&hm=48d56f437a589d62c8abf917af9ca1156be0a580e5c744387ceb2dc7ba5fc92c&=&format=webp&quality=lossless&width=1008&height=566"
                alt="Conta de Valorant"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <Link
                  className="bg-white py-2 px-2 rounded-xl text-black gap-2 items-center font-dmsans text-sm font-semibold hidden group-hover:inline-flex group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1  hover:bg-red-500 "
                  href="comprar/atendimento"
                >
                  Comprar Conta <RiBankFill className="text-lg" />
                </Link>
                <Link
                  className="bg-17 py-2 px-2 bg-red-500 rounded-xl text-black gap-2 items-center font-dmsans text-sm font-medium hidden  group-hover:inline-flex  group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1 "
                  href="add-carrinho"
                >
                  <TbShoppingCartPlus className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex justify-between gap-2 items-baseline">
              <h3 className="text-xl font-dmsans font-bold text-white mt-4 transition ">
                <a href="/pagina-da-conta">Conta Full-Acesso</a>
              </h3>

              <p className="text-red-500 font-dmsans font-bold text-md inline-flex gap-2 items-center">
                Elo Imortal
                <span className="text-[#ccc] font-medium font-dmsans text-sm">
                  (112 Skins)
                </span>
              </p>
            </div>

            <p className="text-[#ccc] font-dmsans font-normal text-sm mt-2 transition ">
              Esta conta foi comprada diretamente com o dono com acesso a todos
              os dados e não possui nenhum risco.
            </p>

            <ul className="py-6 text-white flex flex-col gap-2">
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Dados + IDs Transações
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Dados de Recuperação
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Sem Chances de Recuperação
              </li>
            </ul>
            <ul className=" text-white flex flex-col gap-2">
            <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
               Pode alterar e-mail e senha
              </li>
            <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
                Sem número de verificação
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
                Garantia de 3 meses
              </li>
          
            </ul>
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between mt-4">
              <h1 className="text-white font-dmsans font-semibold text-2xl inline-flex gap-2 items-center transition ">
                R$499.99{" "}
                <Tooltip text="Pagamento Seguro com Criptografia">
                  <h1 className="text-white text-[14px] font-dmsans py-2 px-2 bg-black rounded-xl border border-solid border-[#333] ">
                    <IoMdCart />
                  </h1>
                </Tooltip>
              </h1>

              <button className="bg-red-500 font-dmsans text-sm font-bold hover:scale-105 text-black py-2 px-4 rounded-xl  hover:bg-green-300 transition duration-300 inline-flex gap-2 items-center group">
                Comprar Agora{" "}
                <FaLongArrowAltRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </div>
          </div>
          <div className="bg-[#080808] border border-solid border-[#222] rounded-2xl shadow-lg p-8 ">
            <div className="relative overflow-hidden group transition  border border-solid border-[#333] rounded-xl">
              <img
                className="object-cover w-full max-h-56 rounded-xl"
                src="https://media.discordapp.net/attachments/1252999386808717432/1257795930506395738/image-15.png?ex=66865dfe&is=66850c7e&hm=48d56f437a589d62c8abf917af9ca1156be0a580e5c744387ceb2dc7ba5fc92c&=&format=webp&quality=lossless&width=1008&height=566"
                alt="Conta de Valorant"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <Link
                  className="bg-white py-2 px-2 rounded-xl text-black gap-2 items-center font-dmsans text-sm font-semibold hidden group-hover:inline-flex group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1  hover:bg-red-500 "
                  href="comprar/atendimento"
                >
                  Comprar Conta <RiBankFill className="text-lg" />
                </Link>
                <Link
                  className="bg-17 py-2 px-2 bg-red-500 rounded-xl text-black gap-2 items-center font-dmsans text-sm font-medium hidden  group-hover:inline-flex  group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1 "
                  href="add-carrinho"
                >
                  <TbShoppingCartPlus className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex justify-between gap-2 items-baseline">
              <h3 className="text-xl font-dmsans font-bold text-white mt-4 transition ">
                <a href="/pagina-da-conta">Conta Full-Acesso</a>
              </h3>

              <p className="text-red-500 font-dmsans font-bold text-md inline-flex gap-2 items-center">
                Elo Imortal
                <span className="text-[#ccc] font-medium font-dmsans text-sm">
                  (112 Skins)
                </span>
              </p>
            </div>

            <p className="text-[#ccc] font-dmsans font-normal text-sm mt-2 transition ">
              Esta conta foi comprada diretamente com o dono com acesso a todos
              os dados e não possui nenhum risco.
            </p>

            <ul className="py-6 text-white flex flex-col gap-2">
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Dados + IDs Transações
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Dados de Recuperação
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Sem Chances de Recuperação
              </li>
            </ul>
            <ul className=" text-white flex flex-col gap-2">
            <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
               Pode alterar e-mail e senha
              </li>
            <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
                Sem número de verificação
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
                Garantia de 3 meses
              </li>
          
            </ul>
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between mt-4">
              <h1 className="text-white font-dmsans font-semibold text-2xl inline-flex gap-2 items-center transition ">
                R$499.99{" "}
                <Tooltip text="Pagamento Seguro com Criptografia">
                  <h1 className="text-white text-[14px] font-dmsans py-2 px-2 bg-black rounded-xl border border-solid border-[#333] ">
                    <IoMdCart />
                  </h1>
                </Tooltip>
              </h1>

              <button className="bg-red-500 font-dmsans text-sm font-bold hover:scale-105 text-black py-2 px-4 rounded-xl  hover:bg-green-300 transition duration-300 inline-flex gap-2 items-center group">
                Comprar Agora{" "}
                <FaLongArrowAltRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </div>
          </div>
          <div className="bg-[#080808] border border-solid border-[#222] rounded-2xl shadow-lg p-8 ">
            <div className="relative overflow-hidden group transition  border border-solid border-[#333] rounded-xl">
              <img
                className="object-cover w-full max-h-56 rounded-xl"
                src="https://media.discordapp.net/attachments/1252999386808717432/1257795930506395738/image-15.png?ex=66865dfe&is=66850c7e&hm=48d56f437a589d62c8abf917af9ca1156be0a580e5c744387ceb2dc7ba5fc92c&=&format=webp&quality=lossless&width=1008&height=566"
                alt="Conta de Valorant"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <Link
                  className="bg-white py-2 px-2 rounded-xl text-black gap-2 items-center font-dmsans text-sm font-semibold hidden group-hover:inline-flex group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1  hover:bg-red-500 "
                  href="comprar/atendimento"
                >
                  Comprar Conta <RiBankFill className="text-lg" />
                </Link>
                <Link
                  className="bg-17 py-2 px-2 bg-red-500 rounded-xl text-black gap-2 items-center font-dmsans text-sm font-medium hidden  group-hover:inline-flex  group-hover:animate-fadeIn transition duration-300 hover:-translate-y-1 "
                  href="add-carrinho"
                >
                  <TbShoppingCartPlus className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex justify-between gap-2 items-baseline">
              <h3 className="text-xl font-dmsans font-bold text-white mt-4 transition ">
                <a href="/pagina-da-conta">Conta Full-Acesso</a>
              </h3>

              <p className="text-red-500 font-dmsans font-bold text-md inline-flex gap-2 items-center">
                Elo Imortal
                <span className="text-[#ccc] font-medium font-dmsans text-sm">
                  (112 Skins)
                </span>
              </p>
            </div>

            <p className="text-[#ccc] font-dmsans font-normal text-sm mt-2 transition ">
              Esta conta foi comprada diretamente com o dono com acesso a todos
              os dados e não possui nenhum risco.
            </p>

            <ul className="py-6 text-white flex flex-col gap-2">
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Dados + IDs Transações
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Dados de Recuperação
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbShield className="text-lg text-red-500"/>
                Sem Chances de Recuperação
              </li>
            </ul>
            <ul className=" text-white flex flex-col gap-2">
            <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
               Pode alterar e-mail e senha
              </li>
            <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
                Sem número de verificação
              </li>
              <li className=" font-dmsans font-medium text-[#ccc] text-sm transition inline-flex items-center gap-2">
                <TbWorldCheck className="text-lg text-red-500"/>
                Garantia de 3 meses
              </li>
          
            </ul>
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between mt-4">
              <h1 className="text-white font-dmsans font-semibold text-2xl inline-flex gap-2 items-center transition ">
                R$499.99{" "}
                <Tooltip text="Pagamento Seguro com Criptografia">
                  <h1 className="text-white text-[14px] font-dmsans py-2 px-2 bg-black rounded-xl border border-solid border-[#333] ">
                    <IoMdCart />
                  </h1>
                </Tooltip>
              </h1>

              <button className="bg-red-500 font-dmsans text-sm font-bold hover:scale-105 text-black py-2 px-4 rounded-xl  hover:bg-green-300 transition duration-300 inline-flex gap-2 items-center group">
                Comprar Agora{" "}
                <FaLongArrowAltRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullAcesso;
