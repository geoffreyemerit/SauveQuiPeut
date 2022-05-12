import React from "react";

const TextAboutUs = () => {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-3 mx-16 mt-20 mb-24 gap-60">
        <div>
          <div className="h-1 bg-bg-left" />
          <h1 className="text-3xl font-bold text-bg-left">Nous sommes</h1>
          <h2 className="text-3xl font-bold text-white">Eco-conçus</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div>
          <div className="h-1 bg-bg-left" />
          <h1 className="text-3xl font-bold text-bg-left">Nous sommes</h1>
          <h2 className="text-3xl font-bold text-white">Des petits fous</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div>
          <div className="h-1 bg-bg-left" />
          <h1 className="text-3xl font-bold text-bg-left">Nous croyons</h1>
          <h2 className="text-3xl font-bold text-white">Au changement</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center text-bg-left">
        Ils nous font déjà confiance
      </h1>
      <div className="flex h-16 justify-evenly mt-14">
        <img src="./public/assets/global/binanceLogo.png" alt="binance" />
        <img src="./public/assets/global/osLogo.png" alt="binance" />
        <img src="./public/assets/global/ssLogo.png" alt="binance" />
        <img src="./public/assets/global/ethereumLogo.png" alt="binance" />
      </div>
    </div>
  );
};

export default TextAboutUs;
