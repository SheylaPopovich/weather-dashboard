// var button = document.querySelector(".button")
// var input = document.querySelector(".input")
// var location = document.querySelector("#location")
// var temp = document.querySelector("#temp")
// var desc = document.querySelector("#desc")




// button.addEventListener('click', function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' +input.value+ '&appid=2f1cda6e44000ccd9b7f1f34fc6c638c')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     console.log(fetch)
// })

// //search weather data






// function weatherBalloon( cityID ) {
//     var key = '2f1cda6e44000ccd9b7f1f34fc6c638c';
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver,id=' + cityID+ '&appid=' + key)  
//     .then(function(resp) { return resp.json() }) // Convert data to json
//     .then(function(data) {
//       drawWeather(data);
//     })
//     .catch(function() {
//       // catch any errors
//     });
//   }
  
//   window.onload = function() {
//     weatherBalloon( 6167865 );
//   }

//   function drawWeather( d ) {
//     var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    
//     document.getElementById('description').innerHTML = d.weather[0].description;
//     document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
//     document.getElementById('location').innerHTML = d.name;
// }

