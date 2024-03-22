// Define the API URL
const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=cd788cab19704afa8fd193536242203&q=Salinópolis&aqi=yes&lang=pt';
var weatherData;
var temp_c = document.getElementById("temp_c");
var weatherCondition = document.getElementById("weatherCondition");
var weatherIcon = document.getElementById("weatherIcon");

function callApi(){
// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    weatherData = data;
    temp_c.innerText = "Temperatura: " + weatherData.current.temp_c + "°C";
    weatherCondition.innerText = weatherData.current.condition.text;
    weatherIcon.src = weatherData.current.condition.icon;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

