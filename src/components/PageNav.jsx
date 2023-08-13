import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ShopCategories from "./ShopCategories";
import CartDisplay from "../components/cartDisplay";
import SearchBar from "./SearchBar";
import { CartContext } from "../context/cartContext";
import { menuIcon } from "./Icons";

function PageNav() {
  const [showCategories, setShowCategories] = useState(false);
  const { isCartDisplayVisible, setCartDisplayVisible } =
    useContext(CartContext);

  // const [isMobile, setIsMobile] = useState(false);

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
    <nav className="text-md ml-5 flex flex-wrap justify-between  bg-violet-100 text-indigo-600 sm:grid sm:h-20 sm:grid-cols-2 sm:grid-rows-1 sm:items-center">
      <div className="">
        <ul className="flex items-center justify-around">
          <li>
            <NavLink
              className="flex items-center font-medium sm:text-lg sm:font-semibold"
              to="/"
            >
              <img
                src="/public/guitar-pedal.png"
                alt="pedal icon"
                className="w-[40px] p-1 sm:w-[50px]"
              />
              <h1 className=" ml-1 sm:ml-3">Peak</h1>
            </NavLink>
          </li>
          <li
            className=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/shop" className="hidden sm:flex md:flex lg:flex">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="hidden sm:flex md:flex lg:flex">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className="hidden sm:flex md:flex lg:flex" to="/outlet">
              Outlet
            </NavLink>
          </li>
          <li>
            <NavLink className="hidden sm:flex md:flex lg:flex" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <button>
              <img
                src={menuIcon}
                className="ml-24 h-6 w-6 sm:hidden md:hidden lg:hidden"
              />
            </button>
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
