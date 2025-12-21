"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { NotFoundImage } from "../Images";
import "../styles/NotFound.css";
import Button from "../components/ui/Button";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="not-found">

      <div className="not-found-svg">
        <img src={NotFoundImage} alt="404 Not Found" />
      </div>
      <h1 className="not-found-title heading">Oops! Page Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button onClick={() => router.push("/")}>
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFound;
