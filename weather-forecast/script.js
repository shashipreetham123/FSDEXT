import { openmeteo } from 'https://esm.sh/wmo4677'

const searchInput = document.getElementById("search-input")
const currentElt = document.querySelector(".current")
const searchButton = document.getElementById("search-button")
const dailyElt = document.querySelector(".daily")


searchButton.onclick = loadWeather

const forecastDays = 15

async function loadWeather() {
    const city = searchInput.value

    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`

    const geoRes = await fetch(geoURL)

    if (!geoRes.ok) {
        alert('Unable to Fetch')
        return
    }

    const geoData = await geoRes.json()

    if (!geoData || !geoData.results || geoData.results.length == 0) 
        alert('Unable to Find the City')

    const {latitude, longitude, name, country} = geoData.results[0]

    const weatherURL = 'https://api.open-meteo.com/v1/forecast'+
    `?latitude=${latitude}&longitude=${longitude}`+
    '&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code'+
    '&daily=temperature_2m_min,temperature_2m_max,weather_code'+
    '&timezone=auto'+
    `&forecast_days=${forecastDays}`

    const weatherRes = await fetch(weatherURL)

    if (!weatherRes.ok) 
        alert("Unable to Fetch.")

    const weatherData = await weatherRes.json()

    console.log(weatherData)

    currentElt.innerHTML = 
    `<h2>${name}</h2>`+
    `<h3>${country}</h3>`+
    `<h3>${openmeteo.metadata[weatherData.current.weather_code]?.description || ""}</h3>`+
    `<p>Temperature: ${weatherData.current.temperature_2m} ${weatherData.current_units.temperature_2m}</p>`+
    `<p>Humidity: ${weatherData.current.relative_humidity_2m} ${weatherData.current_units.relative_humidity_2m}</p>` +
    `<p>Wind Speed: ${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}</p>`


    const date = new Date()

    dailyElt.innerHTML = ''

    for (let i = 0; i < forecastDays; i++) {
        const fday = date
        fday.setDate(fday.getDate() + i + 1)

        const dateText = fday.toLocaleDateString()

        dailyElt.innerHTML += 
        `<div class='card'>`+
        `<h3>${dateText}</h3>`+
        `<p>Temperature Min: ${weatherData.daily.temperature_2m_min[i]} ${weatherData.daily_units.temperature_2m_min}</p>` +
        `<p>Temperature Max: ${weatherData.daily.temperature_2m_max[i]} ${weatherData.daily_units.temperature_2m_max}</p>` +
        `<h3>${openmeteo.metadata[weatherData.daily.weather_code[i]]?.description || ""}</h3>`+
        '</div>'
    }
}