import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnNameReact, setBtnReact] = useState("Login");

  useEffect(() => {
    console.log("User Effect called")
  }, [btnNameReact])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
          <button type="button" className="loginBtn" onClick={() => { 
            btnNameReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
            }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
