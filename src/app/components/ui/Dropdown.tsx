// components/Dropdown.js

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiUserSearchLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";


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
        <div className="absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-[#111]   transition-opacity duration-300 ease-in-out animate-fadeIn text-white">
          <div
            className="flex flex-col items-center py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/conta"
              className="flex items-center gap-3 font-dmsans w-48 font-bold px-4 py-3 rounded-xl  text-md text-white transition duration-300 hover:bg-[#171717] hover:scale-105 group"
              role="menuitem"
            >
              <RiUserSearchLine className="text-red-500 text-2xl"/> Minha Conta
            </Link>
            <Link
              href="/meus-pedidos"
          className="flex items-center gap-3 font-dmsans w-48 font-bold px-4 py-3 rounded-xl  text-md text-white transition duration-300 hover:bg-[#171717] hover:scale-105 group"
              role="menuitem"
            >
              <BiWallet className="text-red-500 text-2xl"/> Meus Pedidos
            </Link>
            <Link
              href="/meus-pedidos"
            className="flex items-center gap-3 font-dmsans w-48 font-bold px-4 py-3 rounded-xl  text-md text-white transition duration-300 hover:bg-[#171717] hover:scale-105 group"
              role="menuitem"
            >
              <CgLogOut className="text-red-500 text-2xl"/> Sair da Conta
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownNav;
