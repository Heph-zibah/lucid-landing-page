import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
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
        </ul>
      </footer>
    </>
  );
};

export default Footer;
