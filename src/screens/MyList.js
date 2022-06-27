import React, { useState, useEffect } from "react";
import "./MyList.css";
import { useSelector } from "react-redux";
import { selectList } from "../features/listSlice";

function MyList() {
  const list = useSelector(selectList);
  // const [movieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   setMovieList(list);
  // }, [list]);

  console.log(list);

  return (
    <div className="myList">
      <h1 className="myList__title">My List</h1>
      <div>
        {/* {list.map((movie) => (
          <h1 className="myList__title">
            {movie?.name || movie?.title || movie?.orignial_name}
          </h1>
        ))} */}
      </div>
    </div>
  );
}

export default MyList;
