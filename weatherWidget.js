const apiKey = '46060088bca4f2b154df885f01ea557c';

let temperature = 0;
let windspeed = 0;

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
        temperature = temp;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerHTML = 'Wind Speed: ' + speed + 'km/h';
        windspeed = speed;
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
        input.value = '';
    };
});

let switchCount = 0;

document.getElementById('switch').onclick = () =>{
    if (switchCount == 0){
        document.querySelector('.temp').innerHTML = `${Math.round(100*(temperature*9/5+32))/100}°F`;
        document.querySelector('.wind').innerHTML = 'Wind Speed: ' + Math.floor(100*windspeed/1.609344)/100 + 'mph';
        switchCount+=1;
    } else {
        document.querySelector('.temp').innerHTML = `${temperature}°C`;
        document.querySelector('.wind').innerHTML = 'Wind Speed: ' + windspeed + 'km/h';
        switchCount-=1;
    }   
}



