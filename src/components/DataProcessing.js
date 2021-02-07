import toggleOpen from '../logicElements/ToggleOpen';
import React from 'react';

export default function dataProcessing({ data }) {
  return (
    <ul className="future-list">
      {data.map((day, index) => {
        return (
          <li className="card card--future js-card" key={index} data-card={index}>
            <button
              // onClick={() => toggleOpen(index)}
              onClick={() => toggleOpen(index)}
              className="card__item-day"
              data-btn={index}
            >
              Day: {day[0].dt_txt.split(' ')[0]}
            </button>
            <div className="js-content-wrap">
              {day.map((item, id) => {
                return (
                  <div className="card-content" key={id}>
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
