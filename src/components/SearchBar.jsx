import { useEffect, useState } from "react";
import { searchIcon } from "./Icons";
import { NavLink } from "react-router-dom";
import dataSearch from "../../data/items.json";
import CartButton from "./CartButton";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Search:
  useEffect(() => {
    const filteredItems = dataSearch.categories
      .flatMap((category) => category.items)
      .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    setResults(filteredItems.slice(0, 3));
    if (query.length < 3) {
      setResults([]);
      return;
    }
  }, [query]);

  // Outside click:
  useEffect(() => {
    const handleClickOutside = () => {
      setQuery("");
      setResults([]);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ul className="mr-5 flex items-center justify-end gap-1">
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
          className="mr-4 rounded-lg px-4 py-2"
        />
        {results.length > 0 && (
          <div className="absolute mt-2 w-48 rounded-lg border bg-white shadow-md">
            {results.map((item) => (
              <NavLink
                key={item.id}
                to={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
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
      <li>
        <CartButton />
      </li>
    </ul>
  );
}

export default SearchBar;
