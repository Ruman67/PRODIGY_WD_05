// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

function getWeather() {
  const locationInput = document.getElementById('locationInput').value;
  const weatherInfo = document.getElementById('weatherInfo');

  // Fetch weather data
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    .then(response => response.json())
    .then(data => {
      // Display weather information
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const city = data.name;
      const country = data.sys.country;

      weatherInfo.innerHTML = `
        <h2>${city}, ${country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Conditions: ${description}</p>
      `;
    })
    .catch(error => {
      console.log('Error fetching data:', error);
      weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
    });
}
