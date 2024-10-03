import React from "react";
import Header from "../../components/header/header";
import SearchBar from "../../components/search/searchBar";
import Footer from "../../components/footer/footer";
import Movie from "../../components/movies/movie";

import HomeStyles from "./home.module.css";

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className={HomeStyles.film_list_container}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Movie />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;
