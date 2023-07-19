import React, { useEffect, useState } from "react";
import "./MyAccount.css";

const MyAccount = () => {
  const [wrapperLink, seWrapperLink] = useState(
    document.querySelector(".wrapper")
  );
  useEffect(() => {
    seWrapperLink(document.querySelector(".wrapper"));
  }, []);

  const signUpLinkChangeHandler = () => {
    wrapperLink.classList.add("animate-signIn");
    wrapperLink.classList.remove("animate-signUp");
  };

  const signInLinkLinkChangeHandler = () => {
    wrapperLink.classList.add("animate-signUp");
    wrapperLink.classList.remove("animate-signIn");
  };

  return (
    <div className="myAccount-container">
      <div class="wrapper">
        <div class="form-wrapper sign-up">
          <form action="">
            <h2>Sign Up</h2>
            <div class="input-group">
              <input type="text" required />
              <label for="">Username</label>
            </div>
            <div class="input-group">
              <input type="email" required />
              <label for="">Email</label>
            </div>
            <div class="input-group">
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <button type="submit" class="btn">
              Sign Up
            </button>
            <div class="sign-link">
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  className="signIn-link"
                  onClick={signInLinkLinkChangeHandler}
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>

        <div class="form-wrapper sign-in">
          <form action="">
            <h2>Login</h2>
            <div class="input-group">
              <input type="text" required />
              <label for="">Username</label>
            </div>
            <div class="input-group">
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <div class="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="btn">
              Login
            </button>
            <div class="sign-link">
              <p>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="signUp-link"
                  onClick={signUpLinkChangeHandler}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
