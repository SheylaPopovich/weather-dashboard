var searchBtn = document.querySelector("#searchBtn");

var inputValue = document.querySelector(".inputValue");
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var desc = document.querySelector("#desc");
var humidity = document.querySelector("#humidity");
var icon = document.querySelector("#icon");
var uvIndex = document.querySelector("#uvIndex");

var savedList= document.querySelector("#savedList");

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
         



    //missing UV Index ---> index must show favorable, moderate or severe 
searchBtn.onclick = function() {
    //  e.preventDefault()
      fetch('http://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=2f1cda6e44000ccd9b7f1f34fc6c638c')
      
    .then(response => response.json())
    .then(data =>  {
      console.log(data)
      console.log(data.weather[0].icon)
       
      var weatherIconUrl = "http://openweathermap.org/img/wn/" +
      data.weather[0].icon + ".png"
       
        var cityName = data["name"];
        var tempKelvin = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        var humidityValue = data["main"]["humidity"];
       

        //convert Kelvin into Celsius
        var tempCelsius = tempKelvin - 273;
        var tempFahrenheit = tempCelsius * (9/5) + 32;
        var Fahrenheit = Math.floor(tempFahrenheit)


        city.innerHTML = cityName;
        temp.innerHTML = Fahrenheit+'°F';
        desc.innerHTML = descValue;
        humidity.innerHTML = humidityValue;
        var imageIcon = document.createElement('img')

        imageIcon.src= weatherIconUrl

        icon.append(imageIcon)
        //  http://openweathermap.org/img/wn/
        

        // var inputValHistory = inputValue.value
        // var citySearched = cityName
        // localStorage.setItem(citySearched, inputValHistory)
    })
    
}



// //added five day forecast from openweatherApp date, icon, the temp, the wind speed, and humidity. 
// var day1 = document.querySelector("#day1")

// searchBtn.onclick = function() {
//     fetch('http://api.openweathermap.org/data/2.5/forecast?q=' +inputValue.value+ '&appid=2f1cda6e44000ccd9b7f1f34fc6c638c')
    
//   .then(response => response.json())
//   .then(data =>  
//     // console.log(data))

//      {
  
//     var day1Temp = data["list"][0]["main"]["temp"];
//           var day1Wind = data["list"][0]["wind"]["speed"];
//           var day1Hum = data["list"][0]["main"]["humidity"];
          
//     day1.innerHTML = day1Temp + day1Wind + day1Hum;
//   })
//  }





// localStorage.getItem to display search history in section
// cityHistory = localStorage.getItem("citySearched")

// savedList.innerText = "City History" + cityHistory
