import PropTypes from "prop-types";

function CategoryCard({ categoryName, description }) {
  return (
    <div className=" flex items-center justify-center">
      <div className="m-2 mb-0 ml-6 p-10 sm:grid sm:w-1/2 sm:grid-cols-2 sm:grid-rows-1 sm:items-center sm:justify-center sm:divide-x-2 sm:divide-zinc-300 sm:p-8">
        <h2 className=" text-md ml-3 font-bold sm:justify-end sm:text-2xl ">
          {categoryName}
        </h2>
        <p className="text p-3 text-sm text-zinc-500 sm:pl-8">{description}</p>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryCard;
