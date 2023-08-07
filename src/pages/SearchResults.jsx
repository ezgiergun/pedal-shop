import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import dataSearch from "../../data/items.json";
import SupportNav from "../components/SupportNav";
import PageNav from "../components/PageNav";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchQuery = query.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredItems = searchQuery
      ? dataSearch.categories
          .flatMap((category) => category.items)
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
      : [];

    setSearchResults(filteredItems);
  }, [searchQuery]);

  return (
    <>
      <SupportNav />
      <PageNav />
      <div className="mb-4 ml-44 mt-20 text-4xl font-semibold">Search</div>
      <div>
        <h1 className="text-m mb-4  ml-44 font-semibold">
          Search Results for {searchQuery}
        </h1>
        <div className="ml-44 grid  grid-cols-3 gap-4 bg-transparent">
          {searchResults.map((item) => (
            <NavLink
              key={item.name}
              to={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="no-underline"
            >
              <ItemCard
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
