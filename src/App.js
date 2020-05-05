import React, { useEffect, useState } from "react";
import frozen from "./frozen2.png"
import balloons from "./harper_balloons.svg"
import './App.css'
// At the component you want to use confetti
import ConfettiGenerator from "confetti-js";

function App() {
  React.useEffect(() => {
    const confettiSettings = {"target":"confetti","max":"1000","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":false,"width":"1680","height":"971","start_from_edge":false,"respawn":true} 
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
   
    return () => confetti.clear();
  }, []) // add the var dependencies or not

  return (
    <div className="App">
    <canvas id="confetti" className="confetti"></canvas>
      <div className="Countdown">
        <h1>Happy Birthday Harper!</h1>
        </div>
        <div className="image-row">
          <img src={balloons} className="Balloons" alt="balloons"/>
          <img src={frozen} className="Frozen-logo" alt="logo" />
          <img src={balloons} className="Balloons" alt="balloons"/>
        </div>
    </div>
  );
}

export default App;
