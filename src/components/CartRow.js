import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import { incItem, decItem } from "../features/cart/cartSlice";

const CartRow = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <img src={img} alt={title} />
      <div className="info-container">
        <h4>{title}</h4>
        <p>${price}</p>
        <button>remove</button>
      </div>
      <div className="amount-container">
        <button onClick={() => dispatch(incItem(id))}>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button onClick={() => dispatch(decItem(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartRow;
