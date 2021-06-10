import React from "react";
import { LogoPayFazzWhite } from "assets";
import "./Footer.css";

function Footer() {
  return (
    <div className="footr">
      <div className="footr__logo">
        <LogoPayFazzWhite />
        <span className="footr__news">News</span>
      </div>
      <div className="footr__tagline">AGEN KEUANGAN NUSANTARA</div>
    </div>
  );
}

export default Footer;
