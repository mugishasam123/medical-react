import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/tourist.png";
import "./NotFound.css";

const PageNotFound = () => {
  return (
    <div className="container-not">
      <div className="inside-not">
        <img src={Image} alt="Lost-tourist" className="tourist-img" />
        <h1 className="not-title">Page Not Found</h1>
      </div>
      <Link to="/" className="return-not">
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
