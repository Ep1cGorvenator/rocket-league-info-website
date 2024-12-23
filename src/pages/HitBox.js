import React from "react";
import "./HitBox.css";
import Card from "../components/Card";
import data from "../data";
import GoToTop from "../components/GoToTop";

function HitBox() {
  return (
    <>
      <GoToTop />
      <div className="hitboxes">
        <h1 className="heading">Different types of Car HitBoxes</h1>
        <div className="cards">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HitBox;
