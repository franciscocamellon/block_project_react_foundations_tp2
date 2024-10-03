import React from "react";
import MovieStyles from "./movie.module.css";

function Movie() {
  return (
    <>
      <div className={MovieStyles.container}>
        <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/53YWSo75mSaw1vd2YEeX5kwkRos.jpg"></img>
        <div className={MovieStyles.rating}>
          <p>
            78<span>%</span>
          </p>
        </div>
        <div className={MovieStyles.info}>
          <p>Deadpool & Wolverine</p>
          <p>25 de jul de 2024</p>
        </div>
      </div>
    </>
  );
}

export default Movie;
