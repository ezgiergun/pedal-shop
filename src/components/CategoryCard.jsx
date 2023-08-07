import PropTypes from "prop-types";

function CategoryCard({ categoryName, description }) {
  return (
    <div className="flex items-center justify-center">
      <div className="grid w-1/2 grid-cols-2 grid-rows-1 items-center justify-center divide-x-2 divide-zinc-300 p-8">
        <h2 className="justify-end text-2xl font-bold ">{categoryName}</h2>
        <p className="text-s text pl-8 text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryCard;
