import React from "react";
import Loading from "./Loading";
import { getFutureWeather } from "../utils/api";
import FutureWeatherReducer from "../reducers/FutureWeatherReducer";
import Content from "./Content";

export default function FutureWeather() {
  const [state, dispatch] = React.useReducer(FutureWeatherReducer, {
    data: null,
    error: null,
    loading: true,
    input: "",
    place: "Minsk",
    openItem: null,
  });
  const { data, error, loading, input = "Minsk", place } = state;
  React.useEffect(() => {
    // eslint-disable-next-line consistent-return
    getFutureWeather(place).then((res) => {
      if (res.message) {
        dispatch({ type: "error", message: res.message });
      } else if (res) {
        const sorted = [];
        res.data.list.forEach((item) => {
          const key = item.dt_txt.split(" ")[0].replace(/-/g, "");
          if (!sorted[key]) {
            sorted[key] = [];
          }
          sorted[key].push(item);
        });
        dispatch({ type: "success", data: sorted, place });
      } else {
        return null;
      }
    });
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
        type="button"
      >
        Search
      </button>
      {loading && <Loading />}
      {!loading && error && <p className="error-message">{error}</p>}
      {!error && !loading && data && <Content data={data} name={place} />}
    </div>
  );
}
