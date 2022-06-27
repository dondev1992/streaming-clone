import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";
import SignUpScreen from "./SignUpScreen";

function SignInScreen({ loginEmail }) {
  // to use as a pointer to current email
  const emailRef = useRef(null);
  // to use as a pointer to current password
  const passwordRef = useRef(null);

  const [signUp, setSignUp] = useState(false);

  // function for creation of new user
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {!signUp ? (
        <div className="signupScreen">
          <form>
            <h1>Sign In</h1>
            <input
              ref={emailRef}
              placeholder="Email"
              type="email"
              defaultValue={loginEmail}
            />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <h4>
              <span className="signupScreen__gray">New to Netflix? </span>
              <span
                className="signupScreen__link"
                onClick={() => setSignUp(true)}
              >
                Sign Up now.
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <SignUpScreen signUpEmail={loginEmail} />
      )}
    </>
  );
}

export default SignInScreen;
