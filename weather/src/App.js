import React, { useState } from 'react';
import './App.css'

const App = () => {

  
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setWeatherData(data)
          console.log(data);
        });
    }
  }


  const handleInput = (e) =>{
    setCity(e.target.value)
  }

  const calculateCelsius = (fahrenheitTemp) => {
    return (fahrenheitTemp - 32) / 1.8
  };

  const cloudy = () => {
    if (weatherData.weather[0].main === "Clouds") {
      setIcon("https://icons-for-free.com/iconfiles/png/512/cloudy+foggy+weather+icon-1320196574869514194.png")
    } else {
      setIcon("https://openweathermap.org/img/wn/03n.png")
    }
  }

  return (
    <div className='wrapper'>
      <input type="text"
        onChange={handleInput}
        placeholder='Enter your city'
        value={city}
        onKeyPress={getWeather} />


      {typeof weatherData.main === "undefined" ? (
        <p className='enter_city'>Enter city</p>
      ) : (
        <div>
          <p>City: {weatherData.name}</p>
            <p>Temperatura: {Math.round(calculateCelsius(weatherData.main.temp))}°C</p>
          <div><img src={icon} /></div>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  )
}

export default App