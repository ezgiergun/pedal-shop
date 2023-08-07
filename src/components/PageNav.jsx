import { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ShopCategories from "./ShopCategories";
import { CartContext } from "../context/cartContext";
import { cartIcon, searchIcon } from "./Icons";
import CartDisplay from "../components/cartDisplay";
import dataSearch from "../../data/items.json";

function PageNav() {
  const [showCategories, setShowCategories] = useState(false);
  const [isCartDisplayVisible, setCartDisplayVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { cartItems } = useContext(CartContext);
  const searchResultRef = useRef(null);
  const history = useNavigate();

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    history.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {

    const filteredItems = searchQuery
      ? dataSearch.categories
          .flatMap((category) => category.items)
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
      : [];

    const threeResults = filteredItems.slice(0, 3);

    setSearchResults(threeResults);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
      ) {
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      <div className="">
        <form onSubmit={handleSearchSubmit}>
          <ul className="mr-5 flex justify-end gap-8">
            <li>
              <div ref={searchResultRef}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  style={{
                    backgroundImage: `url("${searchIcon}")`,
                    backgroundPosition: "right 10px center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "20px 20px",
                    paddingRight: "40px",
                  }}
                  className="mr-4 rounded-lg px-4 py-2"
                />
                {searchResults.length > 0 && (
                  <div className="absolute mt-2 w-48 rounded-lg border bg-white shadow-md">
                    {searchResults.map((item) => (
                      <NavLink
                        key={item.name}
                        to={`/products/${item.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <NavLink
                      to={`/results?query=${encodeURIComponent(
                        searchQuery.toLowerCase().replace(/\s+/g, "-"),
                      )}`}
                      className="block border-t px-4 py-2 font-semibold text-gray-800"
                    >
                      See all results...
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li>
              <button onClick={handleCartClick}>{cartIcon}</button>
              {cartItems.length > 0 && (
                <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </li>
          </ul>
        </form>
      </div>
      {showCategories && <ShopCategories />}
      {isCartDisplayVisible && <CartDisplay onClose={handleCartClick} />}
    </nav>
  );
}

export default PageNav;
