/* eslint react/prop-types: 0 */
import React from "react";
import Loading from "./Loading";
import useAsync from "../hooks/useAsync";
import axios from "axios";

function Today({ data }) {
  return (
    <article className="card">
      <h2>{data.name}</h2>
      <div className="card-content">
        <ul>
          <li>
            <p>Temp: {Math.round(data.main.temp)}°C</p>
          </li>
          <li>
            <p>Main: {data.weather[0].main}</p>
          </li>
          <li>
            <p>Wind speed:{data.wind.speed} km / h</p>
          </li>
        </ul>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
    </article>
  );
}

function WeatherInfo({ data }) {
  if (data) {
    return <React.Fragment>{data && <Today data={data} />}</React.Fragment>;
  }

  return null;
}

const test = (place) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=1b8f3a719f06226ac250172f1dce270d`
  );
};

export default function CurrentWeather() {
  const [input, setInput] = React.useState("");

  const { execute, status, value, error } = useAsync(test, "Minsk");

  const loading = status === "pending";

  return (
    <React.Fragment>
      <h1 className="title">Current Weather</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="input"
      />
      <button
        className="btn"
        disabled={!input}
        onClick={() => {
          execute(input);
        }}
      >
        Search
      </button>
      {loading && <Loading text="Search Place" />}
      {error && <p className="error-message">{error.message}</p>}
      {!loading && !error && <WeatherInfo data={value} />}
    </React.Fragment>
  );
}
