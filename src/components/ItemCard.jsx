import PropTypes from "prop-types";

function ItemCard({ imageUrl, name, price }) {
  return (
    <div className=" shadow-s w-[300px] justify-center bg-transparent p-10 ">
      <img
        src={imageUrl && "https://placehold.co/615x615/blue/white"} //change "&&"" with "||"" later
        alt={name}
        className="mb-4 h-48 w-full object-cover"
      />
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <p className="text-lg font-bold text-blue-600">${price}</p>
    </div>
  );
}

ItemCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
