document.addEventListener('DOMContentLoaded', () => {
    const weatherCards = document.getElementById('weatherCards');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');

    async function fetchWeatherData() {
        loading.style.display = 'block';
        error.style.display = 'none';
        weatherCards.innerHTML = '';

        try {
            const response = await fetch('http://localhost:5048/weatherforecast');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayWeatherData(data);
        } catch (error) {
            error.textContent = 'Failed to load weather data. Please try again later.';
            error.style.display = 'block';
        } finally {
            loading.style.display = 'none';
        }
    }

    function displayWeatherData(forecasts) {
        forecasts.forEach(forecast => {
            const card = document.createElement('div');
            card.className = 'weather-card';
            card.innerHTML = `
                <h2>${forecast.date}</h2>
                <p><strong>Temperature:</strong> ${forecast.temperatureC}°C / ${forecast.temperatureF}°F</p>
                <p><strong>Summary:</strong> ${forecast.summary}</p>
            `;
            weatherCards.appendChild(card);
        });
    }

    fetchWeatherData();
});
