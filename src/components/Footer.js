import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { total } = useSelector((store) => store.cart);
  // console.log(total);
  return (
    <footer>
      <hr />
      <div className="totals">
        <h3>Total</h3>
        <h4>${total}</h4>
      </div>
      <button onClick={() => dispatch(clearCart())}>clear cart</button>
    </footer>
  );
};

export default Footer;
