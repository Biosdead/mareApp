// https://www.weatherapi.com/

// Define the API URL
const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=cd788cab19704afa8fd193536242203&q=Salinópolis&aqi=yes&lang=pt';
var weatherData;
var temp_c = document.getElementById("temp_c");
var weatherCondition = document.getElementById("weatherCondition");
var weatherIcon = document.getElementById("weatherIcon");
var sensation_c = document.getElementById("sensation_c");

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
    weatherCondition.innerText = "Previsão do clima: " + weatherData.current.condition.text;
    weatherIcon.src = weatherData.current.condition.icon;
    sensation_c.innerText = "Sensação Térmica: " + weatherData.current.feelslike_c + "°C";
    weatherIcon.classList.remove("loader");
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


