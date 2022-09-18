import React from 'react'
import { WeatherList } from './WeatherList'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const TemperatureTime = ({ weatherInfo }) => {

    console.log(WeatherList);

    return (
        <div className="temperature-time">
            <ul className="temperature-time__slider">
                {(()=>{
                    const list = [];
                    for(let i=0;i<24;i++){
                        list.push(
                            <li key={i} className="temperature-time__item">
                                <span>{weatherInfo.hourly.time[i].slice(-4)}</span>
                                <span>{weatherInfo.hourly.weathercode[i]}</span>
                                <span>{weatherInfo.hourly.temperature_2m[i]}</span>
                            </li>
                        )
                    }
                    return <>{list}</>;
                })()}
            </ul>
        </div>
    )
}

export default TemperatureTime
