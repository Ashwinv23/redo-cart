import React from "react";
import { useSelector } from "react-redux";
import CartRow from "./CartRow";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <main>
        <h2>YOUR BAG</h2>
        <p className="empty">is currently empty</p>
      </main>
    );
  }
  return (
    <main>
      {cartItems.map((item) => {
        return <CartRow key={item.id} {...item} />;
      })}
    </main>
  );
};

export default CartContainer;
