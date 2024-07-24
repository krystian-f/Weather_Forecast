import { makeWeatherApiCall } from "./api_connection.js";
import { displayWeather } from "./displayWeather.js";

const inputSearch = document.querySelector('.search-input');
const displayWeatherBox = document.querySelector('.weather-display-container');

const getInput = function(e){
  if(e.keyCode === 13 || e.key === 'Enter'){
  let location = inputSearch.value;
  displayWeatherBox.classList.add('active');

  makeWeatherApiCall(location)
  .then((data) => {
    return displayWeather(data);   
    inputSearch.removeEventListener('keydown', getInput);
  })
  .catch((err) => {
    console.log(err)
  })
  } else {
    return;
  }
}

inputSearch.addEventListener('keydown', getInput);


