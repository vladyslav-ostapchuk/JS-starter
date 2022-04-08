const cities = {
    2643743: 'London',
    625144: 'Minsk',
    3143244: 'Oslo',
    703448: 'Kyiv',
    7531890: 'Gdansk',
    727011: 'Sofia',
    745044: 'Istanbul',
    4229546: 'Washington',
    4401659: 'Odessa'
}
function getSelectCities() {
    let select = document.createElement('select');
    select.id = 'city';
    document.querySelector('.weather__elements').appendChild(select);
    let option;
    for (let key in cities) {
        option = document.createElement('option');
        document.querySelector('select').appendChild(option);
        option.value = key;
        option.innerHTML = cities[key];
    }
}
getSelectCities();
const param = {
    'url': 'https://api.openweathermap.org/data/2.5/',
    'appid': 'b1aba594e9f19ea1b407cb6b9851042b'
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    let titleCity = document.createElement('span');
    titleCity.innerHTML = `в ${data.name}`;
    titleCity.classList.add('weather__city-name');
    document.querySelector('.weather__title').appendChild(titleCity);

    document.querySelector('.weather__name').innerHTML = data.name;
    document.querySelector('.weather__temp').innerHTML = `${Math.round(data.main.temp)}&degC`;
    document.querySelector('.weather__clouds-info').innerHTML = `${data.weather[0]['description']} `;
    document.querySelector('.weather__clouds-icon').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'> `;
    document.querySelector('.weather__humidity').innerHTML = 'Влажность ' + data.main.humidity;
    document.querySelector('.weather__pressure').innerHTML = `Давление ${data.main.pressure} `;
}

getWeather();
document.querySelector('#city').onchange = getWeather;
