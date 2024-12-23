import React, { useState } from "react";
import "./Home.css";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import GoToTop from "../components/GoToTop";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < cardData.length - 1 ? currentSlide + 1 : 0
        );
  };

  const cardData = [
    {
      id: "1",
      heading: "Hear more about the Game?",
      link: "/about",
    },
    {
      id: "2",
      heading: "Learn about the different Car Hitboxes?",
      link: "/hit-boxes",
    },
    {
      id: "3",
      heading: "Sign up to hear more from us.",
      link: "/sign-up",
    },
  ];

  return (
    <>
      <GoToTop />
      <div className="home">
        <div className="home-container">
          <div
            className="card"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {cardData.map((item) => {
              return (
                <HomeCard
                  key={item.id}
                  id={item.id}
                  heading={item.heading}
                  link={item.link}
                />
              );
            })}
          </div>
          <img
            src="images/arrow.png"
            className="arrow left"
            alt=""
            onClick={() => handleClick("left")}
          />
          <img
            src="images/arrow.png"
            className="arrow right"
            alt=""
            onClick={() => handleClick()}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
