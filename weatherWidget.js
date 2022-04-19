const apiKey = '46060088bca4f2b154df885f01ea557c';

function fetchWeather(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid='+ apiKey)
            .then(resp => resp.json())
            .then(data => displayWeather(data))
        }
    
function displayWeather(data){
        const { name} = data;
        const { temp, humidity} = data.main;
        const { icon, description} = data.weather[0];
        const { speed} = data.wind;
        document.getElementById('cityname').innerHTML = name;
        document.querySelector('.temp').innerHTML = `${temp}°C`;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = 'Humidity: ' + humidity;
        document.querySelector('.wind').innerHTML = 'Wind Speed: ' + speed + 'km/h';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')";
    }


const input = document.querySelector('.divcina .search .search-bar');

document.getElementById('search-button')
    .addEventListener('click', () =>{
        document.querySelector('.weather').classList.remove('hide');
        fetchWeather(input.value);
        input.value = '';
    });

input.addEventListener('keydown', (e)=>{
    if (e.key == 'Enter'){
        document.querySelector('.weather').classList.remove('hide');
        fetchWeather(input.value);

    };

})



