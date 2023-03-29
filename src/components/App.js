import React, { useEffect, useState } from "react";
import * as data from "../data.json";
import * as ymaps from "ymaps";

const { pickPoints } = data;

const App = ({ props }) => {
  useEffect(() => {
    console.log("mounted");

    async function createMap() {
      await ymaps.ready(function () {
        var myMap = new ymaps.Map("YMapsID", {
          center: [56.821932, 60.563563],          
          zoom: 15,
        });

        var myGeoObj = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              coordinates: [56.818710, 60.564902] // координаты точки
          }
        });

      myMap.geoObjects.add(myGeoObj); 

      console.log('myGeoObj', myGeoObj);

      });
      
      console.log("ymaps", ymaps);
    }

    createMap();
    
  }, []);

  return (
    <main>
      <div className="card-container"></div>
      <div className="map" id="YMapsID"></div>
    </main>
  );
};

// const App = ({ props }) => (
//   <main>
//     <div className="card-container"></div>
//     <div className="map"></div>
//   </main>
// );

export default App;
