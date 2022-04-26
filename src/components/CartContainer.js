import React from "react";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (cartItems[0].length === 0) {
    return (
      <main>
        <h2>YOUR BAG</h2>
        <p className="empty">is currently empty</p>
      </main>
    );
  }
  return (
    <main>
      {cartItems[0].map((item) => {
        return <CartRow key={item.id} {...item} />;
      })}
    </main>
  );
};

export default CartContainer;
