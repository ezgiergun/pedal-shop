import { useState, useEffect, useRef } from "react";
import { searchIcon } from "./Icons";
import { categories } from "../../data/items.json";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const searchBarRef = useRef(null);
  const allItems = [];

  categories.forEach((category) => {
    allItems.push(...category.items);
  });

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  // Outside click:
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setQuery("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <ul className="mr-5 flex items-center justify-end gap-1 bg-red-200">
        <li>
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              style={{
                backgroundImage: `url("${searchIcon}")`,
                backgroundPosition: "right 10px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20px 20px",
                paddingRight: "40px",
              }}
              className="mr-4 hidden rounded-lg px-4 py-2 sm:flex md:flex lg:flex"
            />
            {query && filteredItems.length > 0 && (
              <div className="absolute mt-2 w-48 rounded-lg border bg-white shadow-md">
                {filteredItems.slice(0, 3).map((item) => (
                  <NavLink
                    key={item.id}
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
                    query.toLowerCase().replace(/\s+/g, "-"),
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
    </div>
  );
}

export default SearchBar;
