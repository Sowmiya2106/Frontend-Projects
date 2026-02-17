const apiKey = "fee2f20c48ac99b181ee0914a053bf63";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML =
          "<p>City not found ❌</p>";
        return;
      }

      const weatherHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Condition: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      `;

      document.getElementById("weatherResult").innerHTML = weatherHTML;
    })
    .catch(error => {
      console.error(error);
      alert("Error fetching weather data");
    });
}

