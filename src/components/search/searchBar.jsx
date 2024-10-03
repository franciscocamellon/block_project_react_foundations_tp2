import React from "react";
import SearchBarStyles from "./searchBar.module.css";

function SearchBar() {
  return (
    <>
      <div className={SearchBarStyles.container}>
        <div className={SearchBarStyles.content}>
          <h1>Bem-vindo!</h1>
          <h2>
            Milhões de filmes e séries para você descobrir. Comece a explorar
            já!
          </h2>
          <div className={SearchBarStyles.searchbar}>
            <input placeholder="Pesquisar por um filme ou série"></input>
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
