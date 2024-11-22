import React from "react";
import { Link } from "react-router-dom";
import { NotFoundImage } from "../Images";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-svg">
        <img src={NotFoundImage} alt="404 Not Found" />
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
