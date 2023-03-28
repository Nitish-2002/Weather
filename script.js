const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7d0d475569msha514216789cee24p10b6abjsna9260a4aea40',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {



            console.log(response)

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Hyderabad")



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Punjab', options)
    .then(response => response.json())
    .then((response) => {



        console.log(response)

        pfeels.innerHTML = response.pfeels
        p_hum.innerHTML = response.p_hum
        p_max_temp.innerHTML = response.p_max_temp
        p_min_temp.innerHTML = response.p_min_temp
        p_sunrise.innerHTML = response.p_sunrise
        p_sunset.innerHTML = response.p_sunset
        p_temp.innerHTML = response.p_temp
        p_wind_degree.innerHTML = response.p_wind_degree
        p_wind_speed.innerHTML = response.p_wind_speed

    })
    .catch(err => console.error(err));