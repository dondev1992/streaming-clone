import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});
  const [percent, setPercent] = useState(0);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const randomPercentageModal = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleClick = (movie) => {
    setModalVisibility(true);
    setMovieSelection(movie);
    setPercent(randomPercentageModal());
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {/* Render each movie poster in row from movies data */}
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {modalVisibility && (
        <MovieModal
          {...movieSelected}
          setModalVisibility={setModalVisibility}
          percent={percent}
        />
      )}
    </div>
  );
}

export default Row;
