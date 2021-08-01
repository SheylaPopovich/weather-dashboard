var searchBtn = document.querySelector("#searchBtn");

var inputValue = document.querySelector(".inputValue");
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var desc = document.querySelector("#desc");
var humidity = document.querySelector("#humidity");
var icon = document.querySelector("#icon");
var uvIndex = document.querySelector("#uvIndex");


//current day time and date
var todaysDate = $("#currentDay");
    date = null;

    var update = function () {
        date = moment(new Date())
        todaysDate.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
    };
    
    $("#currentDay").ready(function(){
        update();
        setInterval(update, 1000);
    }); 
         
searchBtn.onclick = function() {
  
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=2f1cda6e44000ccd9b7f1f34fc6c638c')
    .then(response => response.json())
    .then(data => 
        // console.log(data))
        
        {
        var cityName = data["name"];
        var tempKelvin = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        var humidityValue = data["main"]["humidity"];
        var iconValue = data["weather"][0]["icon"];

        //convert Kelvin into Celsius
        var tempCelsius = tempKelvin - 273;
        var tempFahrenheit = tempCelsius * (9/5) + 32;
        var Fahrenheit = Math.floor(tempFahrenheit)


        city.innerHTML = cityName;
        temp.innerHTML = Fahrenheit+'°F';
        desc.innerHTML = descValue;
        humidity.innerHTML = humidityValue;
        icon.innerHTML = iconValue;
    })
    
}





