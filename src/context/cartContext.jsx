import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartDisplayVisible, setCartDisplayVisible] = useState(false);
  const cartRef = useRef(null);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name,
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }

    setCartDisplayVisible(true);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== item.name),
    );
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 0) {
      if (newQuantity === 0) {
        setCartItems((prevItems) =>
          prevItems.filter((cartItem) => cartItem.name !== item.name),
        );
      } else {
        setCartItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: newQuantity }
              : cartItem,
          ),
        );
      }
    }
  };

  const closeCartDisplay = () => {
    setCartDisplayVisible(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        handleQuantityChange,
        isCartDisplayVisible,
        closeCartDisplay,
        cartRef,
        setCartDisplayVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
