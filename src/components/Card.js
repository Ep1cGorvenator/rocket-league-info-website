import React from 'react';
import './Card.css';

function Card({img, title, description}) {
  return (
    <>
      <div className="card-container">
        <img
          src={img}
          alt="car-hitbox"
          className="card-img"
        />
        <h3 className='title'>{title}</h3>
        <p className='description'>
          {description}
        </p>
      </div>
    </>
  );
}

export default Card