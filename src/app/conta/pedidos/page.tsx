import { FaInfo } from "react-icons/fa6";
import { TbShoppingCartSearch } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

const ContaPedidos = () => {
  return (
    <>
      <div className="bg-black w-full max-h-fit h-screen flex flex-col lg:flex-row   gap-5 px-3 md:px-16 lg:px-28 lg:py-16 md:flex-row text-[#161931]">
        <aside className="mx-auto py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-2 bg-[#111111] border-[#222] rounded-xl top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold font-dmsans text-white">
              Configurações
            </h2>

            <a
              href="/conta"
              className="flex items-center text-white bg-transparent justify-between px-4 py-2.5 font-semibold font-dmsans transition duration-300 hover:bg-[#121212] rounded-full"
            >
              Minhas Informações <FaInfo className="text-white" />
            </a>
            <a
              href="/conta/pedidos"
              className="flex items-center px-4 py-2.5 font-semibold justify-between bg-[#171717]  text-white border border-[#222] rounded-full font-dmsans"
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
        <div className="flex flex-col w-full py-6">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border overflow-hidden dark:border-[#222] rounded-xl bg-[#111111]">
                <table className="min-w-full flex-wrap divide-y  dark:divide-[#222]">
                  <thead className="bg-[#171717]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-medium font-dmsans text-[#fff9]"
                      >
                        ID do Pedido
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-medium font-dmsans text-[#fff9]"
                      >
                        Data
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-medium font-dmsans text-[#fff9]"
                      >
                        Valor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-medium font-dmsans text-[#fff9]"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#222] ">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-red-500">
                      #t5CviQ
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-white">
                     06/07/2024
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-white">
                     R$ 84,70
                      </td>
                      <td className="inline-flex font-dmsans  text-white items-center gap-2 px-6 py-4 whitespace-nowrap text-end text-md font-medium">
                        Pagar
                        <Link
                          type="button"
                          href='/status'
                          className="text-red-500 font-dmsans"
                        >
                          <TbExternalLink/>
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-red-500">
                      #eI6IPN
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-white">
                     12/07/2024
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-white">
                     R$ 192,80
                      </td>
                      <td className="inline-flex font-dmsans text-emerald-500 items-center gap-2 px-6 py-4 whitespace-nowrap text-end text-md font-medium">
                        Entregue
                      
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-red-500">
                      #1blJxF
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-white">
                     22/07/2024
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-dmsans text-white">
                     R$ 148,00
                      </td>
                      <td className="inline-flex font-dmsans text-red-500 items-center gap-2 px-6 py-4 whitespace-nowrap text-end text-md font-medium">
                        Cancelado
                      
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContaPedidos;
