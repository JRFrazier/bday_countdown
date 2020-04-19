import React, { useEffect, useState } from "react";
import frozen from "./frozen2.png"
import balloons from "./harper_balloons.svg"
import './App.css'

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-05-05") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]}{interval}{" "}
      </span>
    );
  });

  return (
    <div className="App">
      <div className="Countdown">
        <h1>Harpers Birthday Countdown!</h1>
          <h1>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </h1>
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
