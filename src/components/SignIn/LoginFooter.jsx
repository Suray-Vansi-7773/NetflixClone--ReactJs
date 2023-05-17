import React from 'react'

function LoginFooter() {
  return (
    <div className="Loginfooter_container">
      <div className="Loginfooter_top">
        <p>Questions? Call 000-800-919-1694</p>
      </div>
      <div className="Loginfooter_middle">
        <ul>
          <li>FAQ</li>
          <li>Cookie Preferences</li>
          <li>Help Centre</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Pricacy</li>
        </ul>
      </div>
      <div className="Loginfooter_bottom">
        <ul>
          <li>
            <select className="signupheader_select">
              <option className="signup_dropdown">Engish</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginFooter