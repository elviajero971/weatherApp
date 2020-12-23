let inputCityWeather = document.getElementById('inputCityWeather');

inputCityWeather.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        loadWeather();
    }
})

function loadWeather() {
    const API_KEY = 'bb81ed2000cc7ebe1770ba7e8f57a415';
    let city = document.getElementById('inputCityWeather').value;
    console.log(city);
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&lang=fr' + '&units=metric';

    let request = new XMLHttpRequest();
    request.open("GET", URL);
    request.send();
    request.onload = function() { //register callback
        let data = request.response

        let weather = JSON.parse(data);
        let city = weather.name
        let descriptionLocalWather = weather.weather[0].description
        let windSpeed = Math.round(weather.wind.speed * 3, 6);
        let windDirection = Math.round(weather.wind.deg);
        let temperature = Math.round(weather.main.temp);
        let minTemperature = Math.round(weather.main.temp_min);
        let maxTemperature = Math.round(weather.main.temp_max);
        let humidity = weather.main.humidity;
        let pressure = weather.main.pressure;
        let date = new Date();
        var options = { weekday: "long", month: "long", day: "numeric" };
        let formatDate = new Intl.DateTimeFormat("fr-FR", options).format(date);
        document.getElementById('weatherContent').innerHTML = `
        <div class="location-box">
            <div class="location">${weather.name}, ${weather.sys.country}</div>
            <div class="date">${formatDate}</div>
        </div>
        <div class="temps">
            <div class="temp">${temperature}°c</div>
            <div class="temp_min_max">${minTemperature} / ${maxTemperature} °c</div>
        </div>
        <div class="weather-description"><img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></div>
        <div class="weather-description">${descriptionLocalWather}</div>
        <div class="weather">
            <div class="pressure-humidity">
                <div><i class="fas fa-tint"></i> ${humidity}%</div>
                <div>${pressure}hPa</div>
            </div>
            <div class="wind">
                <div><i class="fas fa-wind"></i>${windSpeed}km/h</div>
                <div><i class="far fa-compass"></i>${windDirection}°</div>
            </div>
        </div>
            `;
        pageContent = document.getElementById("pageContent");

        if (temperature > 15) {
            pageContent.classList.remove("warm");
            pageContent.classList.remove("cold");
            pageContent.classList.add("warm");
        } else {
            pageContent.classList.remove("warm");
            pageContent.classList.remove("cold");
            pageContent.classList.add("cold");
        }
    }
}



/*
api_key= eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoiNWZlMzg4MjY3MGMyOWY4YzJiYTVjNjA2IiwidGltZSI6MTYwODc0NzEzNS4yMzMxOTd9.zoe0GGbPKHWG1gs4fOz7YoPZHM7ygvJqzhIll_WsdcnG7O2rAM0u-
*/

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];
const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];
const day = String(dateObj.getDate()).padStart(2, '0');
const year = dateObj.getFullYear();
const output = day + ' ' + month + ' ' + year;

console.log(output);

const date1 = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat('en-US').format(date1));

console.log(new Intl.DateTimeFormat('fr-FR').format(date1));