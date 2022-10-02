import React from "react";
import TemperatureMain from "./TemperatureMain";
import TemperatureTime from "./TemperatureTime";
import TemperatureWeek from "./TemperatureWeek";

const Main = ({ weatherInfo, selectPrefectures, selectCity }) => {
  return (
    <main>
      <TemperatureMain
        weatherInfo={weatherInfo}
        selectPrefectures={selectPrefectures}
        selectCity={selectCity}
      />
      <TemperatureTime weatherInfo={weatherInfo} />
      <TemperatureWeek weatherInfo={weatherInfo} />
    </main>
  );
};

export default Main;
