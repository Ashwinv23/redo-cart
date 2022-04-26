import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { total } = useSelector((store) => store.cart);
  return (
    <footer>
      <hr />
      <div className="totals">
        <h3>Total</h3>
        <h4>${total}</h4>
      </div>
    </footer>
  );
};

export default Footer;
