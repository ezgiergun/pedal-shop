import { useEffect, useRef, useState } from "react";
import { searchIcon } from "./Icons";
import { NavLink, useNavigate } from "react-router-dom";
import dataSearch from "../../data/items.json";
import CartButton from "./CartButton";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchResultRef = useRef(null);
  const history = useNavigate();

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

    setSearchResults(filteredItems.slice(0, 3));
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
      ) {
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <ul className="mr-5 flex items-center justify-end gap-1">
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
            <CartButton />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SearchBar;
