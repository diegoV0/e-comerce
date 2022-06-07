import React from "react";
import { Link } from "react-router-dom";
import "@styles/NotFound.scss";

export const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        className="NotFoundImage"
        src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
        alt="Not Found"
      />
      <Link className="LinkToHome" to="/">
        <p className="NotFoundText">Return to Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
