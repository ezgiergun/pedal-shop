import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ShopCategories from "./ShopCategories";
import CartDisplay from "../components/cartDisplay";
import SearchBar from "./SearchBar";
import { CartContext } from "../context/cartContext";

function PageNav() {
  const [showCategories, setShowCategories] = useState(false);
  const { isCartDisplayVisible, setCartDisplayVisible } =
    useContext(CartContext);

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowCategories(false);
    }, 1000);
  };

  const handleCartClick = () => {
    setCartDisplayVisible(!isCartDisplayVisible);
  };

  return (
    <nav className="grid h-20 grid-cols-2 grid-rows-1 items-center bg-violet-100 text-indigo-600">
      <div className="">
        <ul className="flex items-center justify-around">
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
          <li
            className=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/outlet">Outlet</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <SearchBar />
      {showCategories && <ShopCategories />}
      {isCartDisplayVisible && <CartDisplay onClose={handleCartClick} />}
    </nav>
  );
}

export default PageNav;
