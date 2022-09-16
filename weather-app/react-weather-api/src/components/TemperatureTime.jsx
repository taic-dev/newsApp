import React from 'react'

const TemperatureTime = ({ weatherInfo }) => {

    // console.log(weatherInfo.hourly.temperature_2m)

    return (
        <div className="temperature-time">
            <ul className="temperature-time__slider">
                {(()=>{
                    const list = [];
                    for(let i=0;i<10;i++){
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
