// components/Dropdown.js

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbShoppingCartShare } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const DropdownNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="py-2 px-4 rounded-lg font-dmsans font-medium text-sm flex items-center gap-2 bg-red-500 text-white transition-all duration-300 hover:-translate-y-1"
      >
        <PiUserCircleDashedFill className="w-5 h-5" />
        macielrib
        <IoMdArrowDropdown />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#171717]   transition-opacity duration-300 ease-in-out animate-fadeIn text-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/meus-pedidos"
              className="flex items-center gap-2 font-dmsans font-semibold px-4 py-3  text-md text-white transition duration-300 hover:bg-[#222]"
              role="menuitem"
            >
              <TbShoppingCartShare className="text-red-600 text-xl"/> Meus Pedidos
            </Link>
            <Link
              href="/minhas-informacoes"
              className="flex items-center gap-2 font-dmsans font-semibold px-4 py-3 text-md text-white transition duration-300 hover:bg-[#222]"
              role="menuitem"
            >
              <MdLock className="text-red-600 text-xl"/> Minhas Informações
            </Link>
            <Link
              href="/meus-pedidos"
              className="flex items-center gap-2 font-dmsans font-semibold px-4 py-3 text-md text-white transition duration-300 hover:bg-[#222]"
              role="menuitem"
            >
              <TbLogout2 className="text-red-600"/> Sair da Conta
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNav;
