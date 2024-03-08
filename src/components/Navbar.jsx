import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">B.tech</div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contacts</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="button">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
