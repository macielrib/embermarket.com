import { FaInfo } from "react-icons/fa6";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { TbShoppingCartSearch } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";
import Link from "next/link";
import { IoMdMailOpen } from "react-icons/io";

const ContaPedidos = () => {
  return (
    <>
      <div className="bg-black w-full flex flex-col lg:flex-row   gap-5 px-3 md:px-16 lg:px-28 lg:py-16 md:flex-row text-[#161931]">
        <aside className="mx-auto py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-2 bg-[#111111] border-[#222] rounded-xl top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold font-dmsans text-white">
              Configurações
            </h2>

            <a
              href="/conta"
              className="flex items-center px-4 py-2.5 font-semibold justify-between bg-[#171717]  text-white border border-[#222] rounded-full font-dmsans"
            >
              Minhas Informações <FaInfo className="text-white" />
            </a>
            <a
              href="/conta/pedidos"
              className="flex items-center text-white bg-transparent justify-between px-4 py-2.5 font-semibold font-dmsans transition duration-300 hover:bg-[#121212] rounded-full"
            >
              Meus Pedidos <TbShoppingCartSearch className="text-white" />
            </a>
     

            <a
              href="#"
              className="flex items-center text-red-500 bg-transparent justify-between px-4 py-2.5 font-semibold font-dmsans transition duration-300 hover:bg-[#121212] rounded-full"
            >
              Sair da Conta <CgLogOut className="text-red-500" />
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen bg-[#111111] rounded-xl py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <div className="grid grid-cols-1 max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-red-500"
                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F5dc23420da8ac043a4031153c442acf4.cdn.bubble.io%2Ff1698018599877x530304992266907650%2Fdefault-avatar-icon-of-social-media-user-vector.jpg?w=192&h=192&auto=compress&dpr=1&fit=max"
                    alt="Bordered avatar"
                  />

                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button
                      type="button"
                      className="py-3.5 px-7 bg-red-500 transition duration-300 hover:bg-red-800 rounded-lg text-white font-dmsans font-medium "
                    >
                      Alterar foto
                    </button>
                    <button
                      type="button"
                      className="py-3.5 px-7 bg-white rounded-lg  transition duration-300 hover:bg-[#ccc] text-black font-dmsans font-medium "
                    >
                      Deletar foto
                    </button>
                  </div>
                </div>

                <div className="items-center flex flex-col gap-2 mx-auto justify-center text-center mt-8 sm:mt-14 text-[#202142]">
                  <h1 className="font-poppins font-bold text-2xl text-white py-2 px-2">
                    Dados Pessoais
                  </h1>

                  <div className="w-full flex-col items-center lg:flex-row max-w-3xl py-2  gap-2 flex">
                    <input
                      type="name"
                      className="peer py-3 px-6  ps-6 block max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Primeiro nome"
                    />
                    <input
                      type="last_name"
                      className="peer py-3 px-6  ps-6 block max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Segundo nome"
                    />

                    <div className="relative">
                      <input
                        type="email"
                        className="peer py-3 px-6  ps-11 block max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                        placeholder="macielribeiro@gmail.com"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <IoMdMailOpen className="text-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-3xl  py-2 items-center gap-2 flex justify-center">
                    <input
                      type="name"
                      className="peer py-3 px-6  ps-6 block w-full max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="CPF"
                    />
                    <input
                      type="last_name"
                      className="peer py-3 px-6  ps-6 w-full max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Data de Nascimento"
                    />
                  </div>
                  <div className="w-full max-w-3xl py-2  items-center gap-2 flex justify-center">
                    <input
                      type="name"
                      className="peer py-3 px-6  ps-6 block w-full max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Celular"
                    />
                    <input
                      type="last_name"
                      className="peer py-3 px-6  ps-6 w-full max-w-xl bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Discord "
                    />
                  </div>

                  <h1 className="font-poppins font-bold text-2xl text-white py-4 px-2">
                    Segurança e Privacidade
                  </h1>
                  <div className="w-full items-center gap-2 flex justify-center">
                    <input
                      type="name"
                      className="peer py-3 px-6  ps-6 block w-full   bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Senha atual"
                    />
                  </div>
                  <div className="w-full items-center mt-4 gap-2 flex justify-center">
                    <input
                      type="name"
                      className="peer py-3 px-6  ps-6 block w-full max-w-xl  bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Nova senha"
                    />
                    <input
                      type="name"
                      className="peer py-3 px-6  ps-6 block w-full max-w-xl  bg-neutral-900 border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none border-red-500  dark:border-transparent dark:text-[#fff9] dark:placeholder-neutral-500 dark:focus:ring-red-500 font-normal"
                      placeholder="Confirmar nova senha"
                    />
                  </div>
                </div>

                <Link
                  href="save"
                  className="mt-4 w-full bg-red-500 rounded-md py-4 px-4 text-md text-center font-dmsans transition duration-300 hover:bg-red-800 font-medium text-white"
                >
                  Salvar alterações
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContaPedidos;
