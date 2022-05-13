import React from "react";
import PropTypes from "prop-types";

const ExplorerModal = ({
  id,
  setIsModalOpened,
  image,
  name,
  price,
  autor,
  age,
}) => {
  return (
    // >> Modal decoration
    <div className="z-[20] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center bg-opacity-10 backdrop-blur-[2px]">
      <div className="flex flex-col items-center w-[54rem] justify-center rounded-lg box-shadow-1">
        <img
          src={image}
          alt={id}
          className="w-full h-[540px] bp2:h-[300px] object-cover z-[1] rounded-xl"
        />
        <button
          type="button"
          onClick={() => {
            setIsModalOpened(false);
          }}
          className="absolute z-10 self-end mr-4 text-5xl text-slate-50 text-shadow-3 font-orb -mt-[470px] bp2:-mt-[230px] hover:scale-105"
        >
          X
        </button>
        <div className="absolute z-[20] rounded-md mt-[30rem] w-[54rem] bg-slate-900 h-20">
          <h3 className="text-center ml-2 absolute z-[20] font-bold text-3xl text-slate-50 -mb-[300px] bp1:text-[1rem] bp2:-mb-[100px]">
            {name}
          </h3>
          <span className="absolute z-[20] ml-2 mt-9 text-xs text-slate-50">
            {autor}
          </span>
          <span className="absolute z-[20] ml-2 mt-14 text-xs text-slate-50">
            Age : {age}
          </span>
          <span className="absolute z-[20] ml-[43rem] mt-1 text-md text-slate-50">
            Price : {price}
          </span>
          <button
            type="button"
            className="absolute ml-[40rem] mt-8 font-orb z-[20] font-medium text-slate-50 bg-opacity-40 rounded-md backdrop-blur-[2px] border-2 border-slate-50 text-2xl  bp1:text-[1.5vw] bp2:-mb-[230px] bp2:text-[2.4vw] bp3:text-[4.2vw] box-shadow-2 bg-slate-50 px-6 hover:scale-[1.01]"
          >
            Buy this NFT
          </button>
        </div>
      </div>
    </div>
  );
};

ExplorerModal.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

ExplorerModal.defaultProps = {
  id: 1,
};

export default ExplorerModal;
