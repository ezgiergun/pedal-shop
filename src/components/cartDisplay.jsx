import { useContext, useEffect, useRef, useCallback } from "react";
import { CartContext } from "../context/cartContext";
import PropTypes from "prop-types";

const CartDisplay = ({ onClose }) => {
  const { cartItems, handleQuantityChange } = useContext(CartContext);
  const cartRef = useRef();

  const handleOutsideClick = useCallback(
    (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (cartRef.current && cartRef.current.contains(e.target)) {
        e.stopPropagation(); 
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll, { passive: false });
    };
  }, [handleOutsideClick]);
  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };
  const totalPrice = calculateTotalPrice(cartItems);
  return (
    <>
      <div
        ref={cartRef}
        className="fixed right-0 top-0 flex h-screen w-2/5 flex-col  bg-white p-4 shadow-md"
        style={{ overflowY: "scroll" }}
      >
        <nav className="fixed left-[820px] right-0 top-0 h-9 bg-zinc-300 p-0 text-neutral-100"></nav>

        <button
          className="  mt-7 self-end text-3xl font-semibold text-zinc-800"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="mb-10 block text-lg font-semibold">
          Items currently in your cart
        </h2>
        {cartItems.map((item, index) => (
          <div
            key={item.name}
            className={`mb-4 grid grid-cols-[1fr_3fr] grid-rows-1  gap-x-5 ${
              index < cartItems.length - 1 ? "border-b-2 pb-2" : ""
            }`}
          >
            <div>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-auto w-auto"
              />
            </div>
            <div className="grid grid-cols-1 grid-rows-2   ">
              <div>
                <span className="ml-0 text-xl font-semibold">{item.name}</span>
              </div>
              <div className="flex items-center ">
                <button
                  className="mr-2 text-xl text-zinc-900"
                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                >
                  –
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item, parseInt(e.target.value))
                  }
                  className="w-16 border border-zinc-200/95 text-center text-2xl text-zinc-900"
                />
                <button
                  className="ml-2 text-3xl text-zinc-900"
                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                >
                  +
                </button>
                <span className="ml-auto">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={() => {
            alert("Checkout");
          }}
          className="mb-4 mt-4 rounded-md  bg-blue-600 px-4 py-4 font-semibold text-white"
        >
          CHECKOUT
        </button>
      </div>
    </>
  );
};
CartDisplay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartDisplay;
