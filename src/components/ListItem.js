import React from "react";
import "./ListItem.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

function ListItem({ movie }) {
  console.log(movie);
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <div key={movie.id}>
        <img
          className="row__poster"
          src={base_url + movie.backdrop_path}
          alt={movie.name}
        />
      </div>
      <div></div>
    </div>
  );
}

export default ListItem;
