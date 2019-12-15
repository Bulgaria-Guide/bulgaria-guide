import React from 'react';
import './styles.css';

const RatingStars = ({ onClick }) => (
  <fieldset className="rating">
    <input type="radio" id="star5" name="rating" onChange={() => onClick(5)} />
    <label className="full" htmlFor="star5" />
    <input type="radio" id="star4" name="rating" onChange={() => onClick(4)} />
    <label className="full" htmlFor="star4" />
    <input type="radio" id="star3" name="rating" onChange={() => onClick(3)} />
    <label className="full" htmlFor="star3" />
    <input type="radio" id="star2" name="rating" onChange={() => onClick(2)} />
    <label className="full" htmlFor="star2" />
    <input type="radio" id="star1" name="rating" onChange={() => onClick(1)} />
    <label className="full" htmlFor="star1" />
  </fieldset>
);
export default RatingStars;
