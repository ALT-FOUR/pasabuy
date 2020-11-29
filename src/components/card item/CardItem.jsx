import React from "react";
import "./cardItem.styles.css";

const CardItem = ({ name, itemPhoto, price }) => (
  <div className="card-item">
    <div className="img-container">
      <img src={itemPhoto} alt="itemPhoto" className="item-photo" />
    </div>
    <div className="card-details">
      <h2 className="name">{name}</h2>
      <p className="prize">{price}</p>
      <button className="cart-icon">Add</button>
    </div>
  </div>
);

export default CardItem;
