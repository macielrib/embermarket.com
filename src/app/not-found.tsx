import Link from "next/link";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const NotFound = () => {
  return (
    <>
    <section className="bg-black flex justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl items-center justify-center text-center lg:py-36 lg:px-12">
        
          <div className="flex flex-col justify-center mx-auto">
          <h1 className="text-6xl lg:text-9xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto bg-gradient-to-r from-[#9e1223] to-[#ff495f] text-transparent bg-clip-text">
              404
            </h1>
            <h1 className="mt-4 mb-4 text-4xl md:text-6xl font-bold font-poppins max-w-5xl flex items-center gap-1 mx-auto">
              Oops! Onde você está?
            </h1>
       
          </div>
          <p className="mb-8 text-md font-dmsans text-[#fff9] font-normal max-w-xl mx-auto">
          Aparentemente você entrou em uma página que não existe, ainda...
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 items-center">
              <Link
                href="#"
                className="py-3 px-4 bg-[#7289da] text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                Falar com Suporte <FaHeadphonesAlt className="h-4 w-4" />
              </Link>
              <Link
                href="../"
                className="py-3 px-4 bg-red-500 text-white font-dmsans font-medium text-sm rounded-xl flex items-center gap-2 transition duration-300 hover:scale-105 z-50"
              >
                <MdOutlineKeyboardBackspace className="h-4 w-4" /> Voltar ao Início 
              </Link>
            </div>
   
        </div>
      </section>
    </>
  )
}

export default NotFound