const apiKey = "e2927ec283f4042111622a8b26025aec";
function getGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat);
    // console.log(lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    // console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data=> { 
        const finalWeather = document.querySelector("#show_weather span:first-child");
        const finalCity = document.querySelector("#show_weather span:last-child");
        finalCity.innerText = `도시: ${data.name}`;
        finalWeather.innerText = `날씨: ${data.weather[0].main}`;
    })

}

function getGeoFail(){
    alert("Can not find your location and weather.")
}
navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoFail);