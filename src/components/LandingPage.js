import React from "react";
// import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing">
      <h1>Welcome to Project Management Program</h1>
      <label for="username">Username</label>
        <input type="text" placeholder = "Enter Username" name="username"/>
      <label for="password">Password</label>
        <input type="text" placeholder = "Enter Password" name="password"/>
      <button id = "button" type="submit">Login</button>
    </div>
  );
}

export default LandingPage;
