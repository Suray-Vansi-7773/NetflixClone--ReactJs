import React from "react";
import "./signupcart.css";

function SignupCart({ title, img, desc }) {
  return (
    <div className="SignupCartContainer">
      <div className="SignupCartText">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="SignupCartImg">
        <img src={img} alt="1" />
      </div>
    </div>
  );
}

export default SignupCart;
