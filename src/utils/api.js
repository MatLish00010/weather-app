// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json",
});

function getErrorMsg(message, place) {
  if (message === "city not found") {
    return `Place ${place} not found`;
  }
}

export function getCurrentWeather(place = "minsk") {
  console.log(`API: ${place}`);
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=1b8f3a719f06226ac250172f1dce270d`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        throw new Error(getErrorMsg(data.message, place));
      }

      return data;
    });
}

export function getFutureWeather(place) {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=1b8f3a719f06226ac250172f1dce270d`
    )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
}

/*
export function getFutureWeather(place) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=1b8f3a719f06226ac250172f1dce270d`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        throw new Error(getErrorMsg(data.message, place));
      }
      return data;
    });
}
*/
