import React from "react";
const FighterScreen = ({ fighter }) => {
  return (
    <div id="fighter-screen">
      <img
        src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.name.toLowerCase()}.png`}
        id="char-model"
      />
      <h3 id="char-name">{fighter.name}</h3>
    </div>
  );
};

export default FighterScreen;
