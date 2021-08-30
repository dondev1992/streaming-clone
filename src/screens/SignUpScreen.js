import React, { useRef } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen({ loginEmail }) {
  const [email, setEmail] = useState(loginEmail);
  // to use as a pointer to current email
  const emailRef = useRef(email);
  // to use as a pointer to current password
  const passwordRef = useRef(null);

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

  const handleInput = (e) => {
    setEmail(e.target.value);
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
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleInput}
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
