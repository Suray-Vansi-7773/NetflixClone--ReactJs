import React from "react";
import SignupQuestion from "../SignupQuestion";
import SignupQuestionData from "../SignupQuestionData";
import "./SignupQuestionMulti.css";

  

function SignupQuestionMulti() {
  return (
    <div className="SignupQuestionMulti">
      <h1 style={{ color: "white", marginTop: "2rem", marginLeft: "8rem" }}>
        Frequently Asked Questions
      </h1>

      {SignupQuestionData.map((data, index) => (
        // <SignupCart key={index} text={data.text} />
        <SignupQuestion key={index} text={data.text} />
      ))}

      <p className="SignupQuestionMulti_para">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="SignupQuestionMulti_inputAndButton">
        <input type="text" placeholder="Email address" />
        <button>Get Started &gt;</button>
      </div>
    </div>
  );
}

export default SignupQuestionMulti;
