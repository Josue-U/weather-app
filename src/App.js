import React, { useState } from 'react';
import './App.css';
import {fetchWeather} from './api/fetchWeather';
//import axios from 'axios';



function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  

console.log("test");

  const search = async(e) =>{
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  }

  const searchClick = async() =>{
    const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');

    if(data === null){
      return(
        <div>console.error();</div>
      );
    }
  }

  
  // const idKey = process.env.REACT_APP_API_KEY_PHOTO;

  // const url = "https://api.unsplash.com/search/photos/?query="+query+"&client_id="+idKey; 

  return (
    
  
    <div className="main-container">


      <h1>Weather Report</h1>
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          onKeyPress={search}
        />
        <button className="material-icons"  onClick={searchClick}>search</button>
      </div>
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
          </div>
          
          <div className="info">
            <img 
              className="city-icon" 
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
              alt={weather.weather[0].description} 
            />
            <p>{weather.weather[0].description}</p>
          </div>

          <div className="city-humidity">
            <p>Humidity</p>
            {weather.main.humidity}
            <sup>%</sup>
          </div>
          <div className="city-wind">
            <p>Wind Speed</p>
            {parseFloat(weather.wind.speed*(60*60)/1000).toFixed(1)}
            <sup>Km/h</sup>
          </div>

          {/* <div className="city-photo">
            <img src={results[0].urls.small} alt={results[0].links.html} />
          </div> */}
          
          
        </div>
      )}
    </div>
  );
}

export default App;
