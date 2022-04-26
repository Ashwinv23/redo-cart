import React from "react";
import { ChevronUp, ChevronDown } from "../icons";

const CartRow = ({ id, title, price, img, amount }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <div className="info-container">
        <h4>{title}</h4>
        <p>${price}</p>
        <button>remove</button>
      </div>
      <div className="amount-container">
        <button>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartRow;
