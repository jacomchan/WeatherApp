const api = {
    key: "429dfa97fc6188d688adfea3567c034e",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector(".searchLocation");
  searchbox.addEventListener('keypress', setQuery);
  
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
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    setBackground(weather.weather)
  
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

<<<<<<< HEAD
  function setBackground(weatherType) {
    let weatherImage = document.querySelector(".weather-image");

    if (weatherType == "Clear") {
=======
  function setBackground(weatherName) {
    let weatherImage = document.querySelector(".weather-image");

    if (weatherName == "Clear") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/brightness-high-fill.svg";
<<<<<<< HEAD
    } else if (weatherType == "Drizzle") {
=======
    } else if (weatherName == "Drizzle") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/cloud-drizzle-fill.svg";
<<<<<<< HEAD
    } else if (weatherType == "Thunderstorm") {
=======
    } else if (weatherName == "Thunderstorm") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/cloud-lighting-fill.svg";
<<<<<<< HEAD
    } else if (weatherType == "Rain") {
=======
    } else if (weatherName == "Rain") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/cloud-rain-heavy-fill.svg";
<<<<<<< HEAD
    } else if (weatherType == "Snow") {
=======
    } else if (weatherName == "Snow") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/cloud-snow-fill.svg";
<<<<<<< HEAD
    } else if (weatherType == "Clouds") {
=======
    } else if (weatherName == "Clouds") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/cloud-sun-fill.svg";
<<<<<<< HEAD
    } else if (weatherType == "Fog") {
=======
    } else if (weatherName == "Fog") {
>>>>>>> 12f429255db085f38a9fb3c6e6d277a3f84f6871
      weatherImage.src = "assets/images/clouds-fog-fill.svg";
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