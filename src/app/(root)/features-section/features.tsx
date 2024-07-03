import { MdWorkspacePremium } from "react-icons/md";
import { RiSpyFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { MdSyncLock } from "react-icons/md";

const Features = () => {
  return (
    <>
      <section className="bg-black py-6 px-6 space-y-6">
        <div className="flex flex-col justify-center mx-auto group">
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto z-50">
            Benefícios e Segurança{" "}
            <MdWorkspacePremium className="text-[#ff495f] group-hover:-translate-y-2 duration-300 transition z-50" />{" "}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text z-50">
            Experiência Premium.
          </h1>
          <p className="mb-8 mt-4 text-center text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto">
            Saiba por que somos líderes em segurança e qualidade. Nossas
            soluções são desenhadas para oferecer <span className="text-red-500">o melhor serviço</span> com <span className="text-red-500">total
            confiabilidade.</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-[#0A0A0D] border border-solid border-[#111] p-8 rounded-xl flex flex-col items-start w-full max-w-md h-64 transition duration-300 hover:scale-105">
            <RiSpyFill className="text-6xl mb-4 text-red-600" />
            <h3 className="text-2xl font-dmsans font-semibold text-white mb-4">Proteção Completa</h3>
            <p className="font-dmsans font-normal text-[#fff9]">
            Anonimato é nossa prioridade. Compre tranquilo, sabendo que seus dados estão protegidos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A0A0D] border border-solid border-[#111] p-8 rounded-xl flex flex-col items-start w-full max-w-md h-64 transition duration-300 hover:scale-105">
            <FaShippingFast className="text-6xl mb-4 text-red-600" />
            <h3 className="text-2xl font-dmsans font-semibold text-white mb-4">Entrega Imediata</h3>
            <p className="font-dmsans font-normal text-[#fff9]">
            Serviço rápido e eficiente. Ao comprar qualquer conta ela é entregue no mesmo momento.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A0A0D] border border-solid border-[#111] p-8 rounded-xl flex flex-col items-start w-full max-w-md h-64 transition duration-300 hover:scale-105">
            <MdSyncLock className="text-6xl mb-4 text-red-600" />
            <h3 className="text-2xl font-dmsans font-semibold text-white mb-4">Transação Segura</h3>
            <p className="font-dmsans font-normal text-[#fff9]">
              A cada transação nova é feito uma verificação minuciosa para sua segurança.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
