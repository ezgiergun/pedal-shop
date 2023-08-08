import { cartIcon } from "./Icons";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

function CartButton() {
  const { setCartDisplayVisible, isCartDisplayVisible, cartItems } =
    useContext(CartContext);
  const handleCartClick = () => {
    setCartDisplayVisible(!isCartDisplayVisible);
  };
  return (
    <>
      <button className="" onClick={handleCartClick}>
        {cartIcon}
      </button>
      {cartItems.length > 0 && (
        <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
          {cartItems.length}
        </span>
      )}
    </>
  );
}

export default CartButton;
