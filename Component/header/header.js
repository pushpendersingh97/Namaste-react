import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img src="assests/logo.jpg" alt="Italian Trulli"/>
            </div>
            <div className="search-wrapper">
                <input type="text" name="searh" placeholder="Search" className="form-control" />
            </div>
            <div className="user-wrapper">
                User logo
            </div>
        </div>
    )
}

export default Header;