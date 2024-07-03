import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";
import { TbPointerQuestion } from "react-icons/tb";
import { HiNewspaper } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <section className="bg-black py-12 px-6">
        <div className="flex flex-col justify-center mx-auto group relative">
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
            Ainda com Perguntas?
            <TbPointerQuestion className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-50" />{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
            Vamos Responder!
          </h1>
          <p className="mb-8 mt-4 text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto ">
            Ainda com dúvidas sobre a Ember? Sem problemas, nossa equipe está{" "}
            <span className="text-red-500">diariamente atendendo</span> usuários
            em <span className="text-red-500">nossa comunidade.</span>
          </p>
        </div>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 items-center">
          <Link
            href="#"
            className="py-3 px-4 bg-[#7289da] text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
          >
            Junte-se ao Discord <FaDiscord className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="py-3 px-4 bg-red-500 text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
          >
            Termos de Serviço <HiNewspaper className="h-4 w-4" />
          </Link>
        </div>

      
      </section>
      <div className="py-4 flex flex-col justify-center mx-auto">
          <h1 className="text-red-500 font-dmsans text-sm font-normal mx-auto">Ember<span className="text-white">market — desde 2023</span></h1>
          <p className="text-center text-sm font-dmsans text-[#fff9] font-normal max-w-xl mx-auto">Todos os Direitos Reservados.</p>
      
        </div>
    </>
  );
};

export default Footer;
