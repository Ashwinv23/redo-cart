import React from "react";

const CartRow = ({ id, title, price, img, amount }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <div className="title">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <h3>{amount}</h3>
    </article>
  );
};

export default CartRow;
