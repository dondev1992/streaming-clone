import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";
import { useDispatch, useSelector } from "react-redux";
import { selectList, addToList } from "../features/listSlice";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const addMovies = (movie) => {
    dispatch(addToList(movie));
  };

  // To shorten the length of the movie description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__fadeTop" />
      <h1 className="banner__genre">{props?.title}</h1>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.orignial_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button" onClick={addMovies}>
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
