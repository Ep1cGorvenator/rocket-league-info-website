import React, { useEffect } from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";

function HomeCard({ id, heading, link }) {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [link]);

  return (
    <div className="home-card">
      <div className="home-card-container">
        <h1 className="home-heading">{heading}</h1>
        <Link to={link} className="link-button">
          Click Here
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
