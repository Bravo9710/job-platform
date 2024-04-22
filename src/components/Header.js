import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/jobs-logo.png";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" height="60" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/job-offers" className="nav-link">
                Job Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
