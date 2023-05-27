import React from "react";
import "./SignupQuestion.css";

function SignupQuestion({ text }) {
  return (
    <div className="SignupQuestionContainer">
      
      <div className="SignupQuestionText">
        <h3>{text}</h3>
      </div>
      <div className="SignupQuestionIcon">+</div>
    </div>
  );
}

export default SignupQuestion;
