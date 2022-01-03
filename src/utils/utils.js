
export const uppercaseFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getCurrentWeather = async (weatherCity) => {

    const weatherAPI = {
        key: '70a15b1ebfe99ea0b2a4bad8ac95c116',
        base: 'http://api.openweathermap.org/data/2.5/'
    };

    const currentCity = weatherCity;
    let currentWeather = {
        city: null,
        temperature: null,
        description: null,
        icon: null
    };

    await fetch(`${weatherAPI.base}weather?q=${currentCity}&lang=ru&units=metric&APPID=${weatherAPI.key}`)
        .then(res => res.json())
        .then(weatherData => {
            currentWeather =  {
                city: weatherData.name,
                temperature: `${Math.round(weatherData.main.temp)}°`,
                description: uppercaseFirstLetter(weatherData.weather[0].description),
                icon: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
            };
        });

    return currentWeather;
};