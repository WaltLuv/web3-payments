import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="text-white text-base text-center mx-2 cursor-pointer">Fund</li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">Buy</li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">Sell</li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">Rent</li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">Tokenize</li>
        <li className="text-white text-base text-center mx-2 cursor-pointer">Syndicate</li>
        <li className="eth-card py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#00FFFF]">Homes</li>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">Fund</li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">Buy</li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">Sell</li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">Rent</li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">Tokenize</li>
            <li className="text-white text-base text-center mx-2 cursor-pointer">Syndicate</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
