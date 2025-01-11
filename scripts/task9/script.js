async function getWeatherInfo(event){
    let city = document.getElementById("city").value.trim();

    try
    {        
        let result = await fetch(`https://geocode.maps.co/search?q=${city}`)
        .then(response=>response.json());
        
        let lat = result[0].lat;
        let long = result[0].lon;

        try{
            let result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
            .then(response=>response.json());

            return result.current_weather.windspeed;
        }

        catch{
            result.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }   

    catch(error){
        result.innerHTML = `<p>Error: ${error.message}</p>`;
    }  
}

async function displayWindSpeed() {
    let windspeed = await getWeatherInfo();
    if (windspeed !== null) {
        alert(`Current Wind Speed: ${windspeed} km/h`);
    } else {
        alert("Failed to fetch windspeed data.");
    }
}

// Attach displayWindSpeed to a button or event
document.getElementById("resultButton").addEventListener("click", displayWindSpeed);
