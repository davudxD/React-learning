import React, { useState } from 'react';
import './App.css'

const App = () => {

  const apiKey = "a080b798c61b52db50ff10b1fd8fb5ce";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(res => res.json()).then(data => setWeatherData(data));
    }
  }


  return (
    <div className='wrapper'>
      <input type="text"
       onChange={e => setCity(e.target.value)}
        placeholder='Enter your city'
         value={city}
         onKeyPress={getWeather} />
      <p>City:</p>
      <p>Temperatura:</p>
    </div>
  )
}

export default App