import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/users/userSlice";
import Movies from "./screens/Movies";
import TvShows from "./screens/TvShows";
import Popular from "./screens/Popular";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  /**
   * @description Checks Firebase to see if the user is logged in, 
   * if so saves the login info to redux store
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Nav />
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/tvshows">
                <TvShows />
              </Route>
              <Route path="/popular">
                <Popular />
                </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
