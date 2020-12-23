// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json",
});

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
