import React from "react";
import Logo from "../Assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-style">
        <img src={Logo} alt="" />
        <nav className="nav-style">
          <a href="/">Anasayfa</a>
          <a href="/order-pizza">
            {" "}
            - <b>Sipariş Oluştur</b>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
