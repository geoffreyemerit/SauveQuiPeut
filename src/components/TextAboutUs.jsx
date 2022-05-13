import React from "react";

const TextAboutUs = () => {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-3 mx-16 mt-20 mb-24 gap-60">
        <div>
          <div className="h-1 bg-bg-left" />
          <h1 className="text-3xl font-bold text-bg-left">WE ARE</h1>
          <h2 className="text-3xl font-bold text-white">ECO-FRIENDLY</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div>
          <div className="h-1 bg-bg-left" />
          <h1 className="text-3xl font-bold text-bg-left">WE ARE</h1>
          <h2 className="text-3xl font-bold text-white">CHAMPIONS</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div>
          <div className="h-1 bg-bg-left" />
          <h1 className="text-3xl font-bold text-bg-left">WE BELIEVE</h1>
          <h2 className="text-3xl font-bold text-white">IN CHANGE</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui euismod, posuere diam in, vestibulum diam. Nunc cursus
            ullamcorper aliquet. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center text-bg-left">
        THEY ALREADY TRUST US
      </h1>
      <div className="flex h-16 justify-evenly mt-14">
        <img src="./assets/global/binanceLogo.png" alt="binance" />
        <img src="./assets/global/osLogo.png" alt="os" />
        <img src="./assets/global/ssLogo.png" alt="sea sheperd" />
        <img src="./assets/global/ethereumLogo.png" alt="ethereum" />
      </div>
    </div>
  );
};

export default TextAboutUs;
