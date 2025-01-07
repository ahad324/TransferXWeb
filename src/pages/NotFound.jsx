import React from "react";
import { Link } from "react-router-dom";
import { NotFoundImage } from "../Images";
import "../styles/NotFound.css";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="not-found">
      <SEO
        title="404 | Page Not Found - TransferX"
        description="Oops! The page you're looking for doesn't exist. Return to the homepage to explore TransferX."
        keywords="404, page not found, TransferX error, broken link"
        canonical="https://transferx.netlify.app/404"
        ogTitle="Oops! Page Not Found | TransferX"
      />

      <div className="not-found-svg">
        <img src={NotFoundImage} alt="404 Not Found" />
      </div>
      <h1 className="not-found-title heading">Oops! Page Not Found</h1>
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
