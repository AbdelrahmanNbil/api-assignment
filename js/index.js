
const cityInput = document.getElementById('city-input');

async function getWeather (city){
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1afb27c0838b44fab0f144633240407&q=${city}&days=3`);
    const data = await response.json();

    const current = data.current;
    const currentLocation = data.location.name ;
     document.getElementById('temp').textContent= `${current.temp_c} °C`
     document.getElementById('citys').textContent= `${currentLocation}`
     document.getElementById(`tempIcon`).setAttribute('src' ,`http:${current.condition.icon}`)
     document.getElementById(`weatherCondition`).textContent= `${current.condition.text}`

     const nextDay1 = data.forecast.forecastday[1];
     document.getElementById('next-day-1-name').textContent = new Date(nextDay1.date).toLocaleDateString('en-US', { weekday: 'long' });
     document.getElementById('next-day-1-temperature').textContent = ` ${nextDay1.day.avgtemp_c} °C`;
     document.getElementById('next-day-1-condition').textContent = `Condition: ${nextDay1.day.condition.text}`;
     document.getElementById('next-day-1-icon').setAttribute('src', `http:${nextDay1.day.condition.icon}`);

    
     const nextDay2 = data.forecast.forecastday[2];
     document.getElementById('next-day-2-name').textContent = new Date(nextDay2.date).toLocaleDateString('en-US', { weekday: 'long' });
     document.getElementById('next-day-2-temperature').textContent = ` ${nextDay2.day.avgtemp_c} °C`;
     document.getElementById('next-day-2-condition').textContent = `Condition: ${nextDay2.day.condition.text}`;
     document.getElementById('next-day-2-icon').setAttribute('src', `http:${nextDay2.day.condition.icon}`);


}
getWeather('1720743284');

cityInput.addEventListener('input', function () {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});




