import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
  const totalSeconds = 0; // Change this to the total number of seconds

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="text-center">
      <SecondsCounter hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default Home;
