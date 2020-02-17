import React from 'react';

const Main = (props) => {
  return (
    <div className="display-box">
      <h2>Weather for: {props.data.location}</h2>
      <ul>
        <li>Current temperature: {props.data.temp}</li>
        <li>Today's high: {props.data.high}</li>
        <li>Today's low: {props.data.low}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}</li>
      </ul>
    </div>
  )
}

export default Main;