/* let searchBtn = document.getElementById('search-btn')
*/

function getApi() {
    let city = document.getElementById('city-search').value
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +',usa&units=imperial&APPID=dd267f7775731528762e4ab72ff77aef'
    fetch(weatherUrl)
    .then(function (response) {
        if(response.ok) {
            response.json()
            .then(function(data) {
                currentWeather(data)

                weatherForecast()
            })
        }
        else {
            
        }
    })
    console.log()
}

function weatherForecast(cityLat,cityLon) {
    let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&units=imperial&appid=dd267f7775731528762e4ab72ff77aef'
    fetch(forecastUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        for(let i = 0; i < 5; i++) {
            let dayId = 'day-' + i
            document.getElementById(dayId).innerHTML = moment().add(i + 1, 'days').format('ddd')
            dailyForecast(data, i, dayId)
        }
    })
}

function dailyForecast(data, i, dayId) {
    let indexArr = []
   /*  for(let j = 0; j < data.list.length; j++) {
        if()document.getElementById().innerHTML {
            indexArr.push(j)
        }
    } */
   /*  dailyTemp(data, i, indexArr)
    windSpeed(data, i, indexArr)
    humidityRange(data, i, indexArr)
    let iconId = 'icon-' + i
    let weatherImg = 'http://openweathermap.org/img/wn/' + data.list[indexArr[4]].weather[0].icon + '.png'
    document.getElementById(iconId).setAttribute('src',weatherImg) */
}

function humidityRange(data, i, indexArr) {
    let humidArr = []
    let highHumid = -1000
    let lowHumid = 1000
    for(let j = 0; j < indexArr.length; j++) {
        humidArr.push(data.list[indexArr[j]].main.humidity)
    }
    for(let j = 0; j < humidArr.length; j++) {
        if() {
           
        }
        if() {
           
        }
    }
    let humidId = 'humidity-' + i
    document.getElementById(humidId).innerHTML = 'Humidity: ' + Math.round(lowHumid) + '-' + Math.round(highHumid) + '%'
}





