/* eslint react/prop-types: 0 */
import React from "react";
import Loading from "./Loading";
import { getFutureWeather } from "../utils/api";

function FutureWeatherReducer(state, action) {
  if (action.type === "success") {
    return {
      data: action.data,
      place: action.place,
      error: null,
      loading: false,
    };
  } else if (action.type === "input") {
    return {
      ...state,
      input: action.input,
    };
  } else if (action.type === "place") {
    return {
      ...state,
      loading: true,
      place: action.place,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.message,
      loading: false,
    };
  } else {
    throw new Error('`That action type isn"t supported`');
  }
}

function toggleOpen(i) {
  const cards = document.querySelectorAll(".js-card");
  cards.forEach((item) => {
    if (i == item.dataset.card) {
      let wrapper = item.querySelector(".js-content-wrap");
      wrapper.classList.toggle("is-open");
    }
  });
}

function dataProcessing({ data }) {
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
              Day: {day[0].dt_txt.split(" ")[0]}
            </button>
            <div className="js-content-wrap">
              {day.map((item, i) => {
                return (
                  <div className="card-content" key={i}>
                    <div>
                      <p>Time: {item.dt_txt.split(" ")[1]}</p>
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

function Content({ data, name }) {
  const isContent = React.useMemo(() => dataProcessing({ data }), [data]);
  return (
    <div>
      <h1>Weather for 5 days in {name}</h1>
      {isContent}
    </div>
  );
}

export default function FutureWeather() {
  const [state, dispatch] = React.useReducer(FutureWeatherReducer, {
    data: null,
    error: null,
    loading: true,
    input: "",
    place: "Minsk",
  });

  const { data, error, loading, input, place } = state;

  React.useEffect(() => {
    getFutureWeather(place)
      .then((data) => {
        let sorted = [];
        data.list.forEach((item) => {
          let key = item.dt_txt.split(" ")[0].replace(/-/g, "");
          if (!sorted[key]) {
            sorted[key] = [];
          }
          sorted[key].push(item);
        });
        dispatch({ type: "success", data: sorted, place: place });
      })
      .catch((error) => dispatch({ type: "error", message: error.message }));
  }, [place]);

  return (
    <div>
      <h1 className="title">Future Weather</h1>
      <input
        type="text"
        onChange={(e) => dispatch({ type: "input", input: e.target.value })}
        value={input}
        className="input"
      />
      <button
        className="btn"
        disabled={!input}
        onClick={() => dispatch({ type: "place", place: input })}
      >
        Search
      </button>
      {loading && <Loading />}
      {!loading && error && <p className="error-message">{error}</p>}
      {!error && !loading && data && <Content data={data} name={place} />}
    </div>
  );
}
