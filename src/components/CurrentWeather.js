import React from 'react';
import Loading from './Loading';
import useAsync from '../hooks/useAsync';
import axios from 'axios';
import Today from './Today';

const request = (place) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=1b8f3a719f06226ac250172f1dce270d`
  );
};

export default function CurrentWeather() {
  const [input, setInput] = React.useState('');
  const {
    execute, status, value, error
  } = useAsync(request, 'Minsk');
  const loading = status === 'pending';

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
      {!loading && !error && value && <Today value={value} />}
    </React.Fragment>
  );
}
