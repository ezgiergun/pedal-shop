import CategoryCard from "../components/CategoryCard";
import PageNav from "../components/PageNav";
import SupportNav from "../components/SupportNav";
import ItemCard from "../components/ItemCard";
import itemsData from "../../data/items.json";
import { NavLink } from "react-router-dom";
import { formatProductName } from "../utils/FormatProductName";

function Shop() {
  return (
    <div>
      <SupportNav />
      <PageNav />

      {itemsData.categories.map((category, index) => (
        <div key={index} className="my-8">
          <CategoryCard
            categoryName={category.category}
            description={category.description}
          />
          <div
            className="mx-auto ml-52 flex flex-wrap justify-start gap-2"
            style={{ maxWidth: "1200px" }}
          >
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="w-80">
                <NavLink to={`/products/${formatProductName(item.name)}`}>
                  <ItemCard
                    name={item.name}
                    imageUrl={item.imageUrl}
                    price={item.price}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
