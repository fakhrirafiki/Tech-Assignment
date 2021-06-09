import React from "react";
import "./Footer.scss";
import { LogoPayFazzWhite } from "assets";

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
