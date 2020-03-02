import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import propTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="img" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
}

Room.propTypes = {
  room: propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    images: propTypes.string.isRequired,
    price: propTypes.string.isRequired
  })
};