import React from "react";
import TemperatureMain from "./TemperatureMain";
import TemperatureTime from "./TemperatureTime";
import TemperatureWeek from "./TemperatureWeek";

const Main = ({ weatherInfo }) => {
  return (
    <main>
      <TemperatureMain weatherInfo={weatherInfo} />
      <TemperatureTime weatherInfo={weatherInfo} />
      <TemperatureWeek weatherInfo={weatherInfo} />
    </main>
  );
};

export default Main;
