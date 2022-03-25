import React from "react";
import "./Hour.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { addClassIfSelected } from "../../utils";

interface HourProps {
  index: number;
  hour: HourWeatherProps;
  hoursData: HourWeatherProps[];
  selectHour: SelectHour;
}

const Hour = ({ index, hour, hoursData, selectHour }: HourProps) => {
  return (
    <li
      className={`weather-app-hour-view ${addClassIfSelected(
        hour,
        "weather-app-hour-view--selected"
      )}`}
      onClick={() => selectHour(index, hoursData)}
    >
      {/* adds 'selected' class to child for testing purposes */}
      <div
        className={`weather-app-hour-view__time ${addClassIfSelected(
          hour,
          "selected"
        )}`}
      >
        {hour.time}
      </div>
      <WeatherIcon type={hour.weather} />
      <div
        className="weather-app-hour-view__temp"
        data-testid={`${addClassIfSelected(hour, "selected-hour")}`}
      >
        {hour.temp}
      </div>
    </li>
  );
};
export default Hour;
