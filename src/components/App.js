import React, { useEffect, useState, createContext } from "react";
import * as data from "../data.json";
import * as ymaps from "ymaps";
import Card from "./Card";
import Badge from "./Badge";

const { pickPoints } = data;
console.log("pickPoints", pickPoints);

const App = () => {
  const [currentPickupPoint, setCurrentPickupPoint] = useState({
    latitude: 56.80245,
    longitude: 60.604913,
  });

  useEffect(() => {
    console.log("currentPickupPoint", currentPickupPoint);
  });

  // useEffect(() => {
  //   console.log("mounted");

  //   async function createMap() {
  //     await ymaps.ready(function () {
  //       var myMap = new ymaps.Map("YMapsID", {
  //         center: [56.821932, 60.563563],
  //         zoom: 15,
  //       });

  //       var myGeoObj = new ymaps.GeoObject({
  //         geometry: {
  //           type: "Point", // тип геометрии - точка
  //           coordinates: [56.81871, 60.564902], // координаты точки
  //         },
  //       });

  //       myMap.geoObjects.add(myGeoObj);

  //       console.log("myGeoObj", myGeoObj);
  //     });

  //     console.log("ymaps", ymaps);
  //   }

  //   createMap();
  // }, []);

  return (
    <main>
      <div className="card-container">
        {pickPoints.map((pickPoint) => {
          const { latitude, longitude, address, budgets } = pickPoint;
         
          const geoObj = {
            latitude,
            longitude,
          };

          return (
            <Card
              key={address}
              title={address}
              setPickupPoint={setCurrentPickupPoint}
              geoObj={geoObj}
            >
              {budgets.map((badge) => (
                <Badge className="badge" key={badge}>{badge}</Badge>
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
