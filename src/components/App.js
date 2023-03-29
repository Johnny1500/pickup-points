import React, { useEffect, useState, createContext } from "react";
import * as data from "../data.json";
import * as ymaps from "ymaps";
import Card from "./Card";
import Badge from "./Badge";

const { pickPoints } = data;
console.log("pickPoints", pickPoints);

const App = () => {
  const [currentPickupPoint, setCurrentPickupPoint] = useState({
    latitude: pickPoints[0]["latitude"],
    longitude: pickPoints[0]["longitude"],
    address: pickPoints[0]["address"],
  });

  let ymap, geoObj;

  useEffect(() => {
    console.log("currentPickupPoint", currentPickupPoint);
  });

  useEffect(() => {
    console.log("mounted");

    async function createMap() {
      await ymaps.ready(function () {
        ymap = new ymaps.Map("YMapsID", {
          center: [
            currentPickupPoint["latitude"],
            currentPickupPoint["longitude"],
          ],
          zoom: 15,
        });

        geoObj = new ymaps.GeoObject({
          geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [
              currentPickupPoint["latitude"],
              currentPickupPoint["longitude"],
            ], // координаты точки
          },
        });

        ymap.geoObjects.add(geoObj);

        console.log("geoObj", geoObj);
      });

      console.log("ymaps", ymaps);
    }

    createMap();

    return () => {
      console.log("unmounted");
      ymap.destroy();
      ymap = geoObj = null;
      console.log("ymap unmounted", ymap);
      console.log("geoObj unmounted", geoObj);
    };
  }, [currentPickupPoint]);

  return (
    <main>
      <div className="card-container">
        {pickPoints.map((pickPoint) => {
          const { latitude, longitude, address, budgets } = pickPoint;

          const pickupPointInfo = {
            latitude,
            longitude,
            address,
          };

          return (
            <Card
              key={address}
              title={address}
              setPickupPoint={setCurrentPickupPoint}
              pickupPointInfo={pickupPointInfo}
              currentPickupPoint={currentPickupPoint}
            >
              {budgets.map((badge) => (
                <Badge className="badge" key={badge}>
                  {badge}
                </Badge>
              ))}
            </Card>
          );
        })}
      </div>
      <div className="map" id="YMapsID"></div>
    </main>
  );
};

export default App;
