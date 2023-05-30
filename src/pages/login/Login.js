import React from "react";

import "./index.scss";

function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <div className="header">
          <h1>Welcome!</h1>
          <p>Enter your mobile number and password to login</p>
        </div>
        <form>
          <div className="input">
            <input type="text" placeholder="0899999999 (Example)" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
          <input className="login-btn" type="submit" value="Login" />
        </form>

        <p>
          Already have an account <a href="#">sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
