import { Link } from "react-router-dom";
import itemsData from "../../data/items.json";

function ShopCategories() {
  return (
    <div
      style={{
        top: "calc(20px + 64px)",
        maxHeight: "calc(100vh - 20px - 64px)",
      }}
      className="fixed inset-0 mt-8 bg-white p-4 shadow-md"
    >
      <div className="grid grid-cols-5 gap-4">
        {itemsData.categories.map((category, index) => (
          <div key={index}>
            <Link
              to={`/category/${encodeURIComponent(category.category)}`}
              className="mb-2 block text-xl font-bold text-blue-600 hover:underline"
            >
              {category.category}
            </Link>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-1">
                  <Link
                    to={`/item/${encodeURIComponent(item.name)}`}
                    className="text-blue-600 hover:underline"
                  >
                    {item.name}
                  </Link>
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
