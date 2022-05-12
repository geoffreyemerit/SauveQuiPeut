import React, { useState } from "react";
import PropTypes from "prop-types";

const CardRecruiter = ({
  profile_image_thumbnail: profileImage,
  name,
  nationality,
  date_of_birth: dateOfBirth,
  agency,
  status,
  twitter,
  instagram,
  wiki,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const heartClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-56 h-80 rounded-2xl bg-gradient-to-t from-free-card-bot/30 to-free-card-top/80 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
      <div className="h-full w-full flex flex-col justify-around items-center ">
        <div className="flex justify-between items-center w-full px-2">
          <h2 className="text-main-2 font-title text-center text-sm mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500/90">
            {name}
          </h2>
          <input
            type="image"
            onKeyDown={heartClickFavorite}
            onClick={heartClickFavorite}
            src={
              isFavorite
                ? "./assets/images/heartFill.png"
                : "./assets/images/heartEmpty.png"
            }
            alt="heart"
            className="cursor-pointer h-4 w-4 absolute top-4 right-1"
          />
        </div>

        <div className="h-max w-max overflow-hidden mt-2 rounded-lg ">
          <img
            src={profileImage}
            alt={name}
            className="object-cover opacity-80"
          />
        </div>

        <div className="relative font-primary text-left w-full pl-4 pr-4 pb-2">
          <p className="dataCard">Nationality: {nationality}</p>
          <p className="dataCard">Date of birth: {dateOfBirth}</p>
          <p className="dataCard">Agency: {agency.country_code}</p>
          <p className="dataCard">Status: {status.name}</p>
          {/* TWITTER & INSTAGRAM PROPS */}
          <div className="flex flex-row justify-evenly gap-5 align-center">
            <p className="font-second">
              {twitter ? (
                <a
                  className="text-blue-400 text-xs pb-10"
                  href={twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              ) : null}
            </p>

            <p className="font-second">
              {instagram ? (
                <a
                  className="text-pink-400 text-xs"
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              ) : null}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
        >
          <a href={wiki} target="_blank" rel="noreferrer">
            READ MORE
          </a>
        </button>
      </div>
    </div>
  );
};

CardRecruiter.propTypes = {
  name: PropTypes.string.isRequired,
  profile_image_thumbnail: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  date_of_birth: PropTypes.string.isRequired,
  agency: PropTypes.shape({ country_code: PropTypes.string }).isRequired,
  status: PropTypes.shape({ name: PropTypes.string }).isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
};

//

export default CardRecruiter;
