import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter";
import "../styles/index.css";

let totalSeconds = 0;

setInterval(() => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  ReactDOM.render(
    <SecondsCounter hours={hours} minutes={minutes} seconds={seconds} />,
    document.querySelector("#app")
  );

  totalSeconds++;
}, 1000);
