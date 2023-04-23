import React from "react";
import heroImg from "../Assets/png_20230423_155057_0000.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={heroImg} alt="webinar flyer" className="w-full" />
      </header>
    </>
  );
};

export default Header;
