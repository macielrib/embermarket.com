import Link from "next/link";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { TbShoppingCartShare } from "react-icons/tb";
import { CgComment } from "react-icons/cg";

const CheckoutChat = () => {
  return (
    <>
      <section className="flex flex-col mx-auto justify-center w-full bg- py-6 px-2 lg:py-16 lg:px-12">
        <div className="flex flex-col bg-[#0A0A0D] border border-[#333] rounded-xl w-full px-6">
          <div className=" flex flex-wrap justify-between px-6 py-8">
            <div className="flex flex-col">
              <h1 className="text-white text-3xl font-dmsans font-semibold">
                <span className="text-red-500 text-3xl font-dmsans font-semibold">
                  Pedido #0014
                </span>{" "}
                Conta Full-Acesso
              </h1>
              <p className="py-2 text-[#fff9] font-dmsans font-normal text-sm">
                Criado em 24 de Janeiro, 2024 as 09:00
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 py-6">
              <Link
                href="#"
                className="py-2 px-2 bg-[#7289da] text-black font-dmsans font-semibold  text-sm rounded-lg flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Falar com Suporte <FaHeadphonesAlt className="h-4 w-4" />
              </Link>
              <Link
                href="/categorias/"
                className="py-2 px-2 bg-[#e85347] text-black font-dmsans font-semibold text-sm rounded-lg flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                <LuTrash2 /> Encerrar Pedido
              </Link>

              <Link
                href="#"
                className="py-2 px-2 bg-green-500 text-black font-dmsans font-semibold  text-sm rounded-lg flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Prosseguir Compra <TbShoppingCartShare className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col py-6">
            <div className="flex flex-col mx-auto items-center text-center py-6 px-6 bg-[#171717] border border-[#222] rounded-xl w-full">
              <h1 className="font-dmsans font-semibold text-xl text-white py-1">
                Você tem alguma pergunta em relação a esta compra?
              </h1>
              <p className="text-[#fff9] font-dmsans font-normal text-sm max-w-2xl text-center">
                Abaixo inserimos algumas das perguntas com respostas mais
                frequentes antes de nossos clientes fecharem o seu pedido,
                atente-se e se tiver certeza, pode prosseguir com sua compra.
              </p>
            </div>
            <div className="flex flex-col py-6 lg:py-12 w-full">
              <div className="flex flex-wrap lg:py-4 lg:px-12 justify-between w-full">
                <div className="flex flex-col w-full">
                  <h1 className="flex items-center gap-2 text-red-500 font-dmsans font-semibold text-lg">
                  <FaFire/>
                    Suporte Ember
                    <span className="text-[#fff9] font-dmsans font-normal text-sm">
                      hoje às 16:24
                    </span>
                  </h1>
                  <div className="flex flex-col py-2 lg:px-8">
              
                    <ul className="text-white font-dmsans font-medium flex flex-col gap-1 py-2">
                        <li>
                          <span className="text-red-500">Sim,</span> todas as
                          transações são completamente seguras com uma
                          criptografia de ponta.
                        </li>
                        <li>
                          <span className="text-red-500">Há riscos?</span> Não,
                          as contas não são de revendas, nós mesmos fornecemos
                          diretamente ao usuário.
                        </li>
                        <li>
                          <span className="text-red-500">A conta cai?</span> Não
                          existe possibilidades da conta cair, nosso método é
                          totalmente seguro e testado diariamente.
                        </li>
                        <li>
                          <span className="text-red-500">
                            Para sua segurança,
                          </span>{" "}
                          oferecemos uma garantia de dois meses a todos os
                          clientes evitando qualquer problema em suas
                          transações.
                        </li>
                      </ul>
                    <span className="text-[#fff9] font-dmsans font-normal text-sm">
                      (Ainda com Dúvidas? Fale com nosso{" "}
                      <Link href="/" className="text-[#7289da]">
                        Suporte
                      </Link>
                      )
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div className="w-full mb-4 bg-[#171717] border border-[#222] rounded-xl">
                <div className="px-4 py-2 bg-[#171717] rounded-t-xl">
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-0 text-sm text-white bg-[#171717]"
                    placeholder="Converse com nosso suporte, ou prossiga com sua compra clicando no botão abaixo."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 border-t border-[#222]">
                <Link
                href="#"
                type="submit"
                className="py-2 px-2 bg-white text-black font-dmsans font-semibold  text-sm rounded-lg flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Enviar <CgComment className="h-4 w-4" />
              </Link>
                  <Link
                    href="#"
                    className="py-2 px-2 bg-green-500 text-black font-dmsans font-semibold  text-sm rounded-lg flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
                  >
                    Prosseguir Compra{" "}
                    <TbShoppingCartShare className="h-4 w-4" />
                  </Link>
      
           
        
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutChat;
