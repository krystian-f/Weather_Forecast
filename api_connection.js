let keyAPI = '';

const makeWeatherApiCall = async (location) => {
  let linkAPI = `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=${keyAPI}&units=metric`; 

  try {
    const response = await fetch(linkAPI)
    if(!response.ok) {
      throw new Error (`Error, problem with connection: ${linkAPI}`);
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error (`Error in Weather API for: ${error.message}`);
  }
}

// Export
export {makeWeatherApiCall};



