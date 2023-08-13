import { useParams } from "react-router-dom";
import { categories } from "../../data/items.json";
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
    addToCart(item);
    setCartDisplayVisible(true);
  };

  const handleCloseCartDisplay = () => {
    setCartDisplayVisible(false);
  };

  const productNameFormatted = formatBack(productName);

  const item = categories
    .flatMap((category) => category.items)
    .find((item) => item.name === productNameFormatted);

  if (!item) {
    return <div>Item not found</div>;
  }

  const { name, imageUrl, price, colors, description } = item;

  return (
    <>
      <SupportNav />
      <PageNav />
      <div className=" ml-5 flex items-center text-center sm:m-16 sm:mt-10">
        <div className="justify-center p-8 sm:flex sm:w-full sm:max-w-7xl sm:gap-16 ">
          <div className="sm:flex-shrink-0">
            <img
              src={imageUrl && `https://placehold.co/615x615/blue/white`}
              alt={name}
              className="m-auto h-auto w-2/3
               sm:h-auto sm:w-auto"
            />
          </div>
          <div className="m-auto w-2/3 sm:w-auto sm:flex-grow">
            <h2 className="mb-2 mt-4 text-xl font-semibold sm:mb-4 sm:text-2xl sm:font-bold">
              {name}
            </h2>
            <p className="mb-4 text-lg font-semibold sm:text-xl">
              ${price.toFixed(2)}
            </p>
            <p className="mb-4 text-zinc-600 sm:w-[400px] ">{description}</p>
            <div className="mb-4">
              <p className="font-semibold sm:mb-2">Colors:</p>
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
                className="mb-4 rounded-md  bg-blue-600 px-4 py-4 text-white sm:w-4/5"
              >
                ADD TO CART
              </button>
              <button className="m-auto block text-blue-600">
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
