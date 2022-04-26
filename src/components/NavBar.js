import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="navbar">
        <h2>Redux Toolkit</h2>
        <div className="checkout">
          <CartIcon />
          <p className="amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
