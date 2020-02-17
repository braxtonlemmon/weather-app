async function getWeatherData(city, unit) {
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`, { mode: 'cors' });
  const json = await response.json();
  const currentWeather = {
    temp: json.main.temp,
    low: json.main.temp_min,
    high: json.main.temp_max,
    humidity: json.main.humidity,
    wind: json.wind.speed
  }
  return currentWeather;
}

export default getWeatherData;