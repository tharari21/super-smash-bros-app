import React from "react";

const Fighter = ({ fighter, onSelectFighter }) => {
  return (
    <div style={{ backgroundColor: fighter.color }} onClick={onSelectFighter}>
      <img
        src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.name.toLowerCase()}.png`}
        alt="Not found"
        className="fighter-img"
      />
      <h5 className="fighter-name">{fighter.name}</h5>
    </div>
  );
};

export default Fighter;
