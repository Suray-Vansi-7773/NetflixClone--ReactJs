import React from "react";
import SignupHeader from "./header/SignupHeader";
import "./SignupHome.css";
import Slider from "./slider/Slider";
import SignupCartMulti from "./carts/cart/SignupCartMulti";
import SignupQuestionMulti from "./questions/question/SignupQuestionMulti";
import Footer from "./footer/Footer";

function SignupHome() {
  return (
    <div className="SignupHome_container">
      <SignupHeader />
      <Slider/>
      <SignupCartMulti/>
      <SignupQuestionMulti/>
      <Footer/>
    </div>
  );
}

export default SignupHome;
