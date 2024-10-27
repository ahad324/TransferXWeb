import React from "react";
import { Link } from "react-router-dom";
import computer404 from "../assets/404-computer.svg";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-svg">
        <img src={computer404} alt="404 Not Found" />
      </div>
      <h1 className="not-found-title">Oops! Page Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="button primary">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
