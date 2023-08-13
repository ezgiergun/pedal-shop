import PropTypes from "prop-types";

function ItemCard({ imageUrl, name, price }) {
  return (
    <div className=" ml-0 justify-center sm:w-[300px] sm:p-2 ">
      <img
        src={imageUrl && "https://placehold.co/615x615/blue/white"} //change "&&"" with "||"" later
        alt={name}
        className="h-48 w-full  object-cover sm:mb-4"
      />
      <h2 className="mb-2 ml-1 text-lg font-semibold sm:text-xl sm:font-bold">
        {name}
      </h2>
      <p className=" ml-1 font-semibold text-blue-600 sm:text-lg">${price}</p>
    </div>
  );
}

ItemCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
