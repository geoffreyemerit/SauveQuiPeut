import React from "react";
import PropTypes from "prop-types";

const AssosTable = ({ image, name, age, price }) => {
  console.log(image, name, age, price);
  return (
    <div>
      <div className="flex flex-row w-[90%] self-center overflow-x-auto shadow-md sm:rounded-lg">
        <span>Logos</span>
        <span>Associations name</span>
        <span>Creation</span>
        <span>Category</span>
        <span>Price</span>
      </div>
      <div>
        <img src={image} alt={name} />
        <span>{name}</span>
        <span>{age}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
AssosTable.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
  price: PropTypes.string,
};

AssosTable.defaultProps = {
  image: "",
  name: "",
  age: "",
  price: "",
};

export default AssosTable;
