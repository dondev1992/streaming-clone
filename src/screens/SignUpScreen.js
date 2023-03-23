import React, { useRef } from "react";
import { auth } from "../firebase";
import db from "../firebase";
import "./SignUpScreen.css";
import ReCAPTCHA from "react-google-recaptcha";

function SignUpScreen({ signUpEmail, signUpPassword }) {
  // to use as a pointer to name
  const firstNameRef = useRef(null);
  // to use as a pointer to name
  const lastNameRef = useRef(null);
  // to use as a pointer to current email
  const emailRef = useRef(null);
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
      .then((userCredential) => {
        db.collection("customers").doc(userCredential.user.uid).set({
          firstname: firstNameRef.current.value,
          lastname: lastNameRef.current.value,
          mylist: [],
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onChange = (value) => {
    console.log('Captcha value:', value)
  }
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={firstNameRef} placeholder="First Name" type="text" />
        <input ref={lastNameRef} placeholder="Last Name" type="text" />
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          defaultValue={signUpEmail}
        />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          defaultValue={signUpPassword}
        />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
        <ReCAPTCHA
          sitekey="6LdUaiIlAAAAAKYQEfdILMbKCstWeFsNqC2oMel1"
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default SignUpScreen;
