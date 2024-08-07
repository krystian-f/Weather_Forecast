const displayWeather = function(data) {

  let { main: {temp, feels_like: feelsTemp, humidity}, weather: [{main, icon}]} = {...data}

 
  let displayLocation = document.querySelector('.weather__header-h2');
  displayLocation.textContent = data.name;

  let displayDescription = document.querySelector('.weather__description');
  displayDescription.textContent = main;

  let displayHumidity = document.querySelector('.weather__humidity-display');
  displayHumidity.textContent = humidity;

  let displayTemp = document.querySelector('.temperature-actual');
  displayTemp.textContent = `${temp} °C`;

  let displayTempFeels = document.querySelector('.temperature-min');
  displayTempFeels.textContent = `${feelsTemp} °C` ;

  let displayIcon = document.querySelector('.weather__ico');
  displayIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`
}


// Export
export {displayWeather};