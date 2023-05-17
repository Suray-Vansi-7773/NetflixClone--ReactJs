import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_firstDiv">
        <h3>Questions? Call 000-800-919-1694</h3>
      </div>
      <div className="footer_secondDiv">
        <ul>
          <li>FAQ</li>
          <li>Media Centre</li>
          <li>Ways to Watch</li>
          <li>Cookie Preferences</li>
          <li>Speed Test</li>
          <li>Help Centre</li>
          <li>Investor Relations</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Legal Notices</li>
          <li>Account</li>
          <li>Jobs</li>
          <li>Pricacy</li>
          <li>Contact Us</li>
          <li>Only on Netflix</li>
        </ul>
      </div>

      <div className="footer_thirdDiv">
        <ul>
          <li>
            <select className="signupheader_select">
              <option className="signup_dropdown">Engish</option>
            </select>
          </li>
        </ul>
        <p>Netflix India(Dilip Singh)</p>
      </div>
    </div>
  );
}

export default Footer