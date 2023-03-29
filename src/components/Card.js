import React, { memo, useContext } from "react";
import { GeoContext } from "./App";

const Card = ({
  children,
  title,
  setPickupPoint,
  pickupPointInfo,
  currentPickupPoint,
}) => {
  return (
    <div
      className={`card ${
        currentPickupPoint["address"] === title ? "current-card" : null
      }`}
      onClick={() => setPickupPoint(pickupPointInfo)}
    >
      <div className="card-title">{title}</div>
      <div className="badge-container">{children}</div>
    </div>
  );
};

export default memo(Card);
