import toggleOpen from '../logicElements/ToggleOpen';
import React from 'react';

export default function dataProcessing({ data }) {
  return (
    <ul className="future-list">
      {data.map((day, i) => {
        return (
          <li className="card card--future js-card" key={i} data-card={i}>
            <button
              onClick={() => toggleOpen(i)}
              className="card__item-day"
              data-btn={i}
            >
              Day: {day[0].dt_txt.split(' ')[0]}
            </button>
            <div className="js-content-wrap">
              {day.map((item, i) => {
                return (
                  <div className="card-content" key={i}>
                    <div>
                      <p>Time: {item.dt_txt.split(' ')[1]}</p>
                      <p>Temp: {Math.round(item.main.temp)}°C</p>
                      <p>Description: {item.weather[0].description}</p>
                      <p>Main: {item.weather[0].main}</p>
                    </div>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
