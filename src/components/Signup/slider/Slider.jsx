import React from 'react'
import "./slider.css"
import { Link } from 'react-router-dom';


function Slider() {
  return (
    <div className="slider_container">
      <div className="slider_text">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h2>
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <div className="slider_inputAndButton">
          <input type="text" placeholder="Email address" />
          <Link to="/login">
            <button>Get Started &gt;</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider