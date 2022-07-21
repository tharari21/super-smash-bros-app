import React from "react";
const FighterScreen = ({ selectedFighter }) => {
  return (
    <div
      id="fighter-screen"
      style={{
        backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.name.toLowerCase()}/bg.jpg)`,
      }}
    >
      <img
        src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.name.toLowerCase()}/main.png`}
        id="char-model"
      />
      <h3 id="char-name">{selectedFighter.name}</h3>
    </div>
  );
};

export default FighterScreen;
