
import React from 'react'
import Logo from "../../img/Logo.png"

import { Link } from "react-router-dom";

function Loginheader() {
  return (
    <div className="login_Container1">
      <h1 className="logo">
        <img src={Logo} alt="here is logo" />
      </h1>
      <form className="login_form">
        <div className="login_FormUp">
          <h2>Sign In</h2>
          <input
            className="login_FormUp_input"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="login_FormUp_input"
            type="password"
            placeholder="Password"
          />
          <Link to="/home">
            <button className="login_FormUp_submitButton">Sign In</button>
          </Link>
          <div className="login_FormUp_checkAndPara">
            <div className="login_FormUp_input_check">
              <input type="checkbox" />
              <label htmlFor="remember me">remember me</label>
            </div>
            <div className="login_FormUp_input_para">
              <p>Need help?</p>
            </div>
          </div>
        </div>
        <div className="login_FormDown">
          <p>
            New to Netflix? <span>Sign up now</span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <b> Learn more.</b>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Loginheader

