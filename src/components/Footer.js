import React from "react";
// Importing Logo
import LogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        {/* Logo */}
        <a href='/home'>
          <img src={LogoWhite} alt="Logo White" />
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
