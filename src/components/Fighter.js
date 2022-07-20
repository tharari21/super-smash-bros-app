import React from "react";

const Fighter = ({ fighter }) => {
  return (
    <div>
      <img
        src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.toLowerCase()}.png`}
        alt="Not found"
        className="fighter-img"
      />
      <h5 className="fighter-name">{fighter}</h5>
    </div>
  );
};

export default Fighter;
