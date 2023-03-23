import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import { auth } from "../firebase";
import db from "../firebase";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [currentPlan, setCurrentPlan] = useState({});
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (currentPlan) => {
          setCurrentPlan({
            role: currentPlan.data().role,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .get()
      .then((userName) => {
        setUserName({
          firstname: userName.data().firstname,
          lastname: userName.data().lastname,
        });
      });
  }, [user.uid]);

  console.log(currentPlan);

  return (
    <div className="profileScreen">
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>
              {userName.firstname} {userName.lastname}
            </h2>
            <div>
              <div className="profileScreen__plans">
                <h3>Plans</h3>
                <h3 className="profileScreen__currentPlan">
                  {!currentPlan.role
                    ? " "
                    : `(Current Plan: ${currentPlan.role})`}
                </h3>
              </div>

              <PlansScreen />
              <div className="profileScreen__signOut--button">
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen__signOut"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
