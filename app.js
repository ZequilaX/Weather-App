/* Runs this code once browser loads */
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=19358775f1df01564a08e1f874b875cd&units=metric`;

            fetch(api)
                .then(response =>{
                return response.json();
            })
            .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {main} = data.weather[0];
            const {name} = data;
            const {icon} =data.weather[0];
            
            //Set DOM Elements from API
            temperatureDegree.textContent = temp;
            temperatureDescription.textContent = main;
            temperatureTimezone.textContent = name;
            
            document.getElementById("weather-icon").src=`gifs/${icon}.gif`;

            });
        });

    }

    

});