//? ---------------- Forecast ----------------

import { WeatherType } from "./enums/weather-type";

const forecast: Promise<WeatherType> = new Promise((resolve, reject) => {
    const randomValue = Math.floor(Math.random() * 9) + 1;
    console.log(randomValue);
    if(randomValue >= 0 && randomValue <= 6) {
        resolve(randomValue)
    } else if(randomValue > 6) {
        reject('Weather forecast could not be determined');
    }
})

forecast.then((resp) => {
        console.log(`Weather forecast: ${WeatherType[resp]}`)
    })
    .catch((error) => {
        console.error(error)
    })