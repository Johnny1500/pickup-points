import React, { useEffect, useState } from "react";
import * as data from "../data.json";

const { pickPoints } = data;
// console.log('pickPoints', pickPoints);

// useEffect(async () => {
//   const [ymaps3React] = await Promise.all([
//     ymaps3.import("@yandex/ymaps3-reactify"),
//     ymaps3.ready,
//   ]);

//   console.log("ymaps3React", ymaps3React);
// }, []);

const App = ({ props }) => {
  
  useEffect(() => {
    console.log('mounted');
    // const [ymaps3React] = await Promise.all([
    //   ymaps3.import("@yandex/ymaps3-reactify"),
    //   ymaps3.ready,
    // ]);
  
    // console.log("ymaps3React", ymaps3React);
  }, []);

  return (
    <main>
      <div className="card-container" id="YMapsID"></div>
      <div className="map"></div>
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
