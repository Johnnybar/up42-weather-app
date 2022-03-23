import React from "react";
import "./Hour.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
interface HourProps {
  index: number;
  hour: HourWeatherProps;
  hoursData: HourWeatherProps[];
  selectHour: SelectHour;
}
const Hour = ({ index, hour, hoursData, selectHour }: HourProps) => {
  return (
    <li
      className="weather-app__hour-view"
      onClick={() => selectHour(index, hoursData as [])}
    >
      <div className="weather-app__hour-view-time">{hour.time}</div>
      <WeatherIcon type={hour.weather} />
      <div className="weather-app__hour-view-temp">{hour.temp}</div>
      {/* <div className="weather-app__hour-view-weather">{hour.weather}</div> */}
    </li>
  );
};
export default Hour;
