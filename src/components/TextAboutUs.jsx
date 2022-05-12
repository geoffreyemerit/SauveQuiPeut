import React from "react";

const TextAboutUs = () => {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-3 mx-16 gap-60 mt-20 mb-24">
        <div>
          <div className="h-1 bg-bg-left"></div>
          <h1 className="text-bg-left font-bold text-3xl">Nous sommes</h1>
          <h2 className="text-white font-bold text-3xl">Eco-conçus</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div>
          <div className="h-1 bg-bg-left"></div>
          <h1 className="text-bg-left font-bold text-3xl">Nous sommes</h1>
          <h2 className="text-white font-bold text-3xl">Des petits fous</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div>
          <div className="h-1 bg-bg-left"></div>
          <h1 className="text-bg-left font-bold text-3xl">Nous croyons</h1>
          <h2 className="text-white font-bold text-3xl">Au changement</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <h1 className="text-bg-left font-bold text-3xl text-center">
        Ils nous font déjà confiance
      </h1>
      <div className="flex justify-evenly h-16 mt-14">
        <img src="./public/assets/global/binanceLogo.png" alt="binance" />
        <img src="./public/assets/global/osLogo.png" alt="binance" />
        <img src="./public/assets/global/ssLogo.png" alt="binance" />
        <img src="./public/assets/global/ethereumLogo.png" alt="binance" />
      </div>
    </div>
  );
};

export default TextAboutUs;
