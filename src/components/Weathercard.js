import React, { useEffect, useState } from 'react'

const Weathercard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState("fa-solid fa-cloud");

                    break;
                case "Haze": setWeatherState("fa-solid fa-cloud-fog");

                    break;
                case "Clear": setWeatherState("fa-solid fa-sun");

                    break;
                case "Smoke": setWeatherState("fa-solid fa-cloud-sun-rain");

                    break;
                    case "Rain": setWeatherState("fa-solid fa-cloud-rain");

                    break;


                default: setWeatherState("fa-soli fa-cloud-sun-rain");
                    break;
            }
        }
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getDate()}:${date.getMinutes()}`;
    return (
        <>
            <div className='dashboard'>
                <div className='icon'> <span><i className={`${weatherState}`}></i></span></div>
                <div className='main-info'>
                    <div className='temperature'>{temp}&#176;</div>
                    <div className='city-day'>
                        <div className='day'>{weathermood}</div>
                        <div className='city'>{name},<span className='country'>{country}</span></div>
                    </div>
                    <div className='date'>{new Date().toLocaleString()}</div>
                </div>


                <div className='footer'>
                    <div className='two-side'>
                        <p>
                            <span><i className="fa-solid fa-sun"></i></span>
                        </p>
                        <p className='extra-info'>
                            {timeStr} <br />
                            Sunset
                        </p>
                    </div>

                    <div className='two-side'>
                        <p>
                            <span><i className="fa-solid fa-cloud-rain"></i></span>
                        </p>
                        <p className='extra-info'>
                            {humidity} <br />
                            Humidity
                        </p>
                    </div>

                    <div className='two-side'>
                        <p>
                            <span><i className="fa-brands fa-cloudscale"></i></span>
                        </p>
                        <p className='extra-info'>
                            {pressure} <br />
                            Pressure
                        </p>
                    </div>

                    <div className='two-side'>
                        <p>
                            <span><i className="fa-solid fa-wind"></i></span>
                        </p>
                        <p className='extra-info'>
                            {speed} <br />
                            Wind
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weathercard;
