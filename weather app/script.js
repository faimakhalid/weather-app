// Static weather data for multiple cities
const weatherData = {
    Lahore: {
        temp: "25°C",
        weather: "Sunny",
        windSpeed: "10 km/h"
    },
    Karachi: {
        temp: "30°C",
        weather: "Cloudy",
        windSpeed: "15 km/h"
    },
    Islamabad: {
        temp: "20°C",
        weather: "Rainy",
        windSpeed: "8 km/h"
    },
    Peshawar: {
        temp: "28°C",
        weather: "Windy",
        windSpeed: "12 km/h"
    }
};

function showWeather() {
    const city = document.getElementById("cityDropdown").value;
    const display = document.getElementById("weatherDisplay");

    if (city && weatherData[city]) {
        display.innerHTML = `
            <p>🌍 City: <span>${city}</span></p>
            <p>🌡️ Temperature: <span>${weatherData[city].temp}</span></p>
            <p>🌈 Weather: <span>${weatherData[city].weather}</span></p>
            <p>💨 Wind Speed: <span>${weatherData[city].windSpeed}</span></p>
        `;
    } else {
        display.innerHTML = `<p>Weather information not available.</p>`;
    }
}

