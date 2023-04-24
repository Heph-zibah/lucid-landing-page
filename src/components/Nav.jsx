import React from "react";


const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-8 lg:px-10 bg-[#f38621]">
      <h1 className="text-[#090429] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">
        Lucid English TV
      </h1>

      <a
        href="https://dashboard.mailerlite.com/forms/413086/86287766183216357/share"
        className="bg-[#090429] text-white py-3 px-5 rounded text-2xl"
      >
        Register
      </a>
    </nav>
  );
};

export default Nav;

