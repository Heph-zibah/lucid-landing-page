import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-8 lg:px-10 bg-[#f38621]">
      <h1 className="text-[#090429] text-2xl font-bold">Lucid English TV</h1>

      <button className="bg-[#090429] text-white py-3 px-5 rounded text-2xl">
        Register
      </button>
    </nav>
  );
};

export default Nav;

