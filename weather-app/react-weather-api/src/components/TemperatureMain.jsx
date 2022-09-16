import React from 'react'
import { WeatherList } from './WeatherList'

const TemperatureMain = ({ weatherInfo }) => {

  console.log(WeatherList);
  

  return (
    <div className="temperature-main">
        <div className="temperature-main__desc">
            <p>{weatherInfo.timezone}</p>
            <span>
              {WeatherList.map( value => (value.num == weatherInfo.current_weather.weathercode && value.name))}
            </span>
            <h2>{weatherInfo.current_weather.temperature}</h2>
        </div>
    </div>
  )
}

export default TemperatureMain
