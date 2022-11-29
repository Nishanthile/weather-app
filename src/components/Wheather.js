import React, { useEffect, useState } from 'react';
import Weathercard from './Weathercard';
import "./wheather.css"

const Wheather = () => {

  const [searchValue, setSearchValue] = useState("Mumbai");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3ddf66b0e6309d295456a537ece7335a`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;

      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherData = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,

      };
      setTempInfo(myNewWeatherData);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [])

  return (
    <>
      <div className='main'>

        <div className='search-bar'>
          <input type="search" className='input' placeholder='Search here' autoFocus id='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ></input>
          <button type='button' className='search-btn' onClick={getWeatherInfo}>Search</button>
        </div>


        <Weathercard tempInfo={tempInfo} />

      </div>
    </>
  )
}

export default Wheather;
