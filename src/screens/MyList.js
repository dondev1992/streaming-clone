import React, { useState, useEffect } from "react";
import "./MyList.css";
import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../features/list/listSlice";
import db from "../firebase";
import { auth } from "../firebase";
import ListItem from "../components/ListItem";

function MyList() {
  const list = useSelector(selectList);
  // const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);
  const user = auth.currentUser;

  // useEffect(() => {
  //   db.collection("customer").doc(user?.uid).set(
  //     {
  //       mylist: list,
  //     },
  //     { merge: true }
  //   );
  // }, [list, user.uid]);

  console.log(list);

  return (
    <div className="myList">
      <h1 className="myList__title">My List</h1>
      <div className="myList__posters">
        {list.map((movie) => (
          <ListItem movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MyList;
