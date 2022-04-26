import React from "react";
import { CartIcon } from "../icons";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <h2>Redux Toolkit</h2>
        <div className="checkout">
          <CartIcon />
          <p className="amount">0</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
