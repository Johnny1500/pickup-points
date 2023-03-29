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
          center: [55.76, 37.64],
          zoom: 10,
        });
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
