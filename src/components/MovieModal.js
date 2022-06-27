import React, { useEffect, useState } from "react";
import "./MovieModal.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { IoIosCloseCircleOutline } from "react-icons/io";

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalVisibility,
  percent,
}) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  //   const randomPercentage = () => {
  //     return Math.floor(Math.random() * 100);
  //   };

  useEffect(() => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(title || name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert("Sorry, There is no trailer for this movie"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(trailerUrl);

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span
            onClick={() => setModalVisibility(false)}
            className="modal-close"
          >
            <IoIosCloseCircleOutline style={{ height: 30, width: 30 }} />
          </span>
          {trailerUrl ? (
            <YouTube videoId={trailerUrl} opts={opts} />
          ) : (
            <img
              className="modal__poster-img"
              src={`${base_url}${backdrop_path}`}
              alt="trailer-background"
            />
          )}

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">{percent}% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">{overview}</p>
            <p className="modal__overview">Vote Average: {vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
