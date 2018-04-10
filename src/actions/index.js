import axios from 'axios';
//sign up for a free openweathermaps api key at https://home.openweathermap.org/
const API_KEY = '66ab0b0f0aff13ce6298ad3466c5f4f1';
//es6 template string in URL
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
