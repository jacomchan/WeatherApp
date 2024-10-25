const api = {
    key: "429dfa97fc6188d688adfea3567c034e",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector(".searchLocation");
  searchbox.addEventListener('keypress', setQuery);
  getResults("New York, US");
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.weather-cityDiv .weather-city');
    let title = document.querySelector('.title')
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.weather-dateDiv .weather-date');
    date.innerText = dateBuilder(now);

    let day = document.querySelector('.weather-dateDiv .weather-day');
    day.innerText = dayBuilder(now);
  
    let temp = document.querySelector('.weather-currentWeather .weather-temp');
    temp.innerText = `${Math.round(weather.main.temp)}°C`;
  
    let weather_el = document.querySelector('.weather-currentWeather .weather-name');
    weather_el.innerText = weather.weather[0].main;
    setBackground(weather.weather[0].main)
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }

  function setBackground(weatherName) {
    let weatherImage = document.querySelector(".weather-image");

    if (weatherName == "Clear") {
      weatherImage.src = "assets/images/brightness-high-fill.svg";
    } else if (weatherName == "Drizzle") {
      weatherImage.src = "assets/images/cloud-drizzle-fill.svg";
    } else if (weatherName == "Thunderstorm") {
      weatherImage.src = "assets/images/cloud-lighting-fill.svg";
    } else if (weatherName == "Rain") {
      weatherImage.src = "assets/images/cloud-rain-heavy-fill.svg";
    } else if (weatherName == "Snow") {
      weatherImage.src = "assets/images/cloud-snow-fill.svg";
    } else if (weatherName == "Clouds") {
      weatherImage.src = "assets/images/cloud-sun-fill.svg";
    } else if (weatherName == "Fog") {
      weatherImage.src = "assets/images/cloud-fog-fill.svg";
    }
  }

  function dayBuilder (d) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];

    return `${day}`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${date} ${month} ${year}`;
  }