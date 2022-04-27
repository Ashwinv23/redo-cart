import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { amtTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(amtTotals());
  }, [cartItems]);

  return (
    <div className="App">
      <NavBar />
      {isOpen && <Modal />}
      <CartContainer />
      <Footer />
    </div>
  );
}

export default App;
