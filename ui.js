// class UI {

//   showWeatherDetails(data) {
//     document.getElementById('weatherDetails').innerHTML = `
//     <h1 id="w-location">${data.location.name}</h1>
//     <h3 class="text-dark" id="w-desc">${data.current.weather_des}</h3>
//     <h3 id="w-string">${data.current.temperature} C</h3>
//     <img id="w-icon" src="${data.current.weather_icon}">
//     <ul id="w-details" class="list-group mt-3">
//       <li class="list-group-item" id="w-humdity">${data.current.humidity}</li>
//       <li class="list-group-item" id="w-dewpoint">${}</li>
//       <li class="list-group-item" id="w-feels-like">${data.current.feelslike}</li>
//       <li class="list-group-item" id="w-wind">wind speed : ${data.current.wind_speed}</li>s
//     </ul> `;
//   }
// }


class UI {

  setHtml(data) {

    //set the html 
    document.getElementById('weatherDetails').innerHTML = `
      <h1 id="w-location">${data.location.name}</h1>
      <h5 style="color:black;"> ${data.location.country}</h5>
      <h3 class="text-dark" id="w-desc">${data.current.weather_descriptions}</h3>
      <h3 id="w-string">Temp : ${data.current.temperature} Celcius</h3>
      <img src="${data.current.weather_icons}" alt="Dekha lagto na">
      <ul id="w-details" class="list-group mt-3">
        <li class="list-group-item" id="w-humdity">Humidity :${data.current.humidity}</li>
        <li class="list-group-item" id="w-dewpoint">Wind Direction : ${data.current.wind_dir}</li>
        <li class="list-group-item" id="w-feels-like">Feels Like : ${data.current.feelslike}</li>
        <li class="list-group-item" id="w-wind">wind speed : ${data.current.wind_speed}</li>
      </ul> `;
  }
}