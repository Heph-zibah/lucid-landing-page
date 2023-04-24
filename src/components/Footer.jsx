import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between px-5 py-5 mt-5">
        <h1 className="text-[#090429] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">
          Lucid English TV
        </h1>
        <ul className="flex gap-3 items-center">
          <li>
            <a href="https://youtube.com/@Lucid_EnglishTV" target="_blank">
              <BsYoutube className="text-[#cc181e] text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/LucidEnglishTV?mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebookSquare className="text-[#4267B2] text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://wa.link/pvxoki" target="_blank">
              <FaWhatsappSquare className="text-[#25D366] text-2xl" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
