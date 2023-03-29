import React, { memo } from "react";

const Card = ({ children, title, setPickupPoint, geoObj }) => {
  return (
    <div className="card" onClick={() => setPickupPoint(geoObj)}>
      <div className="card-title">{title}</div>
      <div className="badge-container">{children}</div>
    </div>
  );
};

export default memo(Card);
