const apiKey = "bc60fb998ee6f984822ec49fec56be8d";
const btn = document.querySelector("#i"); // search icon
const inputCity = document.querySelector("#btn"); // text input
const weatherIcon = document.querySelector("#xxx")

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if(data.cod === "404"){
      document.querySelector(".error").style.display = "block";
      // document.querySelector(".error").textContent = "City not found. Please try again.";
      document.querySelector(".items").style.display = "none";
    }
    else{
      document.querySelector(".error").style.display = "none";
      document.querySelector(".items").style.display = "block";

      document.querySelector("#city").innerHTML = data.name; 
      document.querySelector("#wind-speed").innerHTML = data.wind.speed + ` km/hr`; 
      document.querySelector("#humid").innerHTML = data.main.humidity + ` %`; 
      document.querySelector(".temp-value").innerHTML = Math.floor(data.main.temp);
      document.getElementById("seoson").innerHTML = data.weather[0].main;   
    
    // Set weather icon according to condition
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main === "Thunderstorm") {
        weatherIcon.src = "images/thunderstorm.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog") {
        weatherIcon.src = "images/mist.png";
    } else {
        // weatherIcon.src = "images/default.png"; // fallback image
    }
    
    }

    
    // document.querySelector(".items").style.display = "block";
   

    // console.log(weatherIcon.src);
}


btn.addEventListener("click", () => {
    getWeather(inputCity.value);
});

inputCity.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getWeather(inputCity.value);
    }
})

// Removed: getWeather(); // was calling with undefined
