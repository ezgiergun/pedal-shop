import CategoryCard from "../components/CategoryCard";
import PageNav from "../components/PageNav";
import SupportNav from "../components/SupportNav";
import ItemCard from "../components/ItemCard";
import itemsData from "../../data/items.json";
import { NavLink } from "react-router-dom";
import { formatProductName } from "../utils/FormatProductName";

function Shop() {
  return (
    <div className="">
      <SupportNav />
      <PageNav />

      {itemsData.categories.map((category, index) => (
        <div
          key={index}
          className="
        sm:my-8"
        >
          <CategoryCard
            categoryName={category.category}
            description={category.description}
          />
          <div
            className=" m-0 grid justify-center gap-10
            
            sm:mx-auto sm:ml-52 sm:flex  sm:flex-wrap sm:justify-start sm:gap-2 "
            style={{ maxWidth: "1200px" }}
          >
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="ml-20 w-3/5 p-0 sm:mb-1 sm:w-80">
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
