import React from "react";
import "./Navbar.css";
import logo from "/src/assets/logo.png";

function Navbar() {  
    const items = ['Home', 'Features', 'Pricing', 'Blog'];

    return (
        <nav className="navbar">
            <a href = "https://brakesindia.com/">
            <img src={logo} alt="Logo" className="logo" />
            </a>
            
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            
            <ul className="navitems">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="/" className="Notify">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
