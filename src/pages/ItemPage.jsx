import { useParams } from "react-router-dom";
import itemsData from "../../data/items.json";
import { formatBack } from "../utils/FormatProductName";
import SupportNav from "../components/SupportNav";
import PageNav from "../components/PageNav";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import CartDisplay from "../components/cartDisplay";

function ItemPage() {
  const { isCartDisplayVisible, setCartDisplayVisible, addToCart } =
    useContext(CartContext);
  const { productName } = useParams();

  const handleAddToCart = () => {
    addToCart(selectedItem);
    setCartDisplayVisible(true);
  };

  const handleCloseCartDisplay = () => {
    setCartDisplayVisible(false);
  };

  const productNameFormat = formatBack(productName);
  console.log(productNameFormat);
  let selectedItem;
  for (const category of itemsData.categories) {
    selectedItem = category.items.find(
      (item) => (item.name = productNameFormat),
    );
    if (selectedItem) break;
  }

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { name, imageUrl, price, colors, description } = selectedItem;

  return (
    <>
      <SupportNav />
      <PageNav />
      <div className=" mt-10 flex justify-center">
        <div className="flex w-full max-w-7xl gap-16 p-8 ">
          <div className="flex-shrink-0">
            <img src={imageUrl} alt={name} className="h-auto w-auto" />
          </div>
          <div className=" w-auto flex-grow">
            <h2 className="mb-4 text-2xl font-bold">{name}</h2>
            <p className="mb-4 text-xl font-semibold">${price.toFixed(2)}</p>
            <p className="mb-4 w-[400px] text-zinc-600 ">{description}</p>
            <div className="mb-4">
              <p className="mb-2 font-semibold">Colors:</p>
              <div className="flex items-center gap-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`h-8 w-8 rounded-full bg-${color.toLowerCase()}`}
                    title={color}
                  />
                ))}
              </div>
            </div>
            <div className="items-center justify-center">
              <button
                onClick={handleAddToCart}
                className="mb-4 w-4/5  rounded-md bg-blue-600 px-4 py-4 text-white"
              >
                ADD TO CART
              </button>
              <button className="ml-32 block text-blue-600">
                More payment options
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCartDisplayVisible && <CartDisplay onClose={handleCloseCartDisplay} />}
    </>
  );
}

export default ItemPage;
