import React from "react";
import HeaderStyle from "./header.module.css";

function Header() {
  return (
    <>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.navigation}>
          <h1>Logo</h1>
          <nav className={HeaderStyle.nav_links}>
            <a href="#"> Filmes </a>
            <a href="#"> Séries </a>
            <a href="#"> Listas </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
