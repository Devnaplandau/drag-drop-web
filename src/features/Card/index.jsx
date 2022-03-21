import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.item.img} alt="" />
      </div>
      <div className="card-title">
        <p>{props.item.title}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
