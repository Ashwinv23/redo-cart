import React from "react";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";

const CartContainer = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log("hi", cartItems);
  if (cartItems.length === 0) {
    return (
      <main>
        <h2>YOUR BAG</h2>
        <p className="empty">is currently empty</p>
      </main>
    );
  }
  return (
    <main>
      {/* {cartItems.map((item) => {
        return <CartRow />;
      })} */}
    </main>
  );
};

export default CartContainer;
