import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="letter-subscription">
        <h2>
          Subscribe to recieve newsletter about latest news and updates about
          the game.
        </h2>
        <Link to="/sign-up" className="sub-btn">
          Subscribe
        </Link>
      </section>
      <h1>These are links from the Rocket League Official website.</h1>
      <section className="footer-links">
        <div className="link-column">
          <a href="https://www.psyonix.com/eula">EULA</a>
          <a href="https://www.psyonix.com/tou">Terms Of Use</a>
          <a href="https://www.epicgames.com/site/en-US/privacypolicy">
            Privacy Policy
          </a>
        </div>
        <div className="link-column">
          <a href="https://www.rocketleague.com/news">News</a>
          <a href="https://www.rocketleague.com/news/known-issues-in-rocket-league">
            Known Issues
          </a>
          <a href="https://www.rocketleague.com/news/rocket-league-code-of-conduct">
            Code Of Conduct
          </a>
        </div>
        <div className="link-column">
          <a href="https://safety.epicgames.com/en-US">Safety And Security</a>
          <a href="https://www.epicgames.com/help/en-US/c-Category_RocketLeague">
            Support
          </a>
          <a href="https://www.epicgames.com/site/en-US/careers/jobs?company=Psyonix">
            Careers
          </a>
        </div>
      </section>
      <section className="socials">
        <div className="game-logo">
          <img
            className="px-6"
            src="/images/rl_featuringrl_logo.jpg"
            alt="Rocket League Sideswipe"
            width="200"
          />
          {" "}
        </div>
      </section>
    </div>
  );
}

export default Footer;
