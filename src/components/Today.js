import React from "react";

export default function Today(object) {
  return (
    <article className="card">
      <h2>{object.value.name}</h2>
      <div className="card-content">
        <ul>
          <li>
            <p>Temp: {Math.round(object.value.main.temp)}°C</p>
          </li>
          <li>
            <p>Main: {object.value.weather[0].main}</p>
          </li>
          <li>
            <p>Wind speed:{object.value.wind.speed} km / h</p>
          </li>
        </ul>
        <img
          src={`http://openweathermap.org/img/wn/${object.value.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
    </article>
  );
}
