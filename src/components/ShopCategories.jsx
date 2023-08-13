import { NavLink } from "react-router-dom";
import itemsData from "../../data/items.json";
import { formatProductName } from "../utils/FormatProductName";

function ShopCategories() {
  return (
    <div
      style={{
        top: "calc(20px + 64px)",
        maxHeight: "calc(100vh - 20px - 64px)",
      }}
      className="fixed bg-white sm:inset-0 sm:mt-8 sm:p-4"
    >
      <div className="sm:text-md ml-2 grid grid-cols-3 gap-0 text-xs sm:grid-cols-5 sm:gap-2">
        {itemsData.categories.map((category, index) => (
          <div key={index}>
            <NavLink
              to={`/category/${encodeURIComponent(category.category)}`}
              className="mb-2 block font-semibold text-blue-600 hover:underline sm:text-xl"
            >
              {category.category}
            </NavLink>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1">
                  <NavLink
                    to={`/products/${formatProductName(item.name)}`}
                    className="text-blue-600 hover:underline"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategories;
