import React from "react";

const SecondsCounter = (props) => {
  return (
    <div className="seconds-counter">
      <i className="fas fa-stopwatch"></i> {/* Timer counter icon */}
      <span className="hours"> {props.hours}h : </span>
      <span className="minutes"> {props.minutes}m : </span>
      <span className="seconds"> {props.seconds}s </span>
    </div>
  );
};

export default SecondsCounter;
