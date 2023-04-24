import React from "react";


const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-8 lg:px-10 bg-[#f38621]">
      <h1 className="text-[#090429] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">
        Lucid English TV
      </h1>

      <a
        href="https://forms.gle/agg4UHFPsuxWySMX9"
        className="bg-[#090429] text-white py-3 px-5 rounded text-2xl"
      >
        Register
      </a>
    </nav>
  );
};

export default Nav;

