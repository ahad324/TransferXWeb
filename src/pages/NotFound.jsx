import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundImage } from "../Images";
import "../styles/NotFound.css";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

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
      <Button onClick={() => navigate("/")}>
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFound;
