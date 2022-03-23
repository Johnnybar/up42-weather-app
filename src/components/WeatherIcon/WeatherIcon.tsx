import React from "react";
import clouds from "../../assets/weather-cloud.svg";
import clear from "../../assets/weather-sun.svg";
import "./WeatherIcon.scss";
interface WeatherIconProps {
  type: string;
}
const WeatherIcon = ({ type }: WeatherIconProps) => {
  return (
    <img
      className="weather-app__weather-icon"
      src={type === "Clear" ? clear : clouds}
      alt={`${type} weather icon`}
    />
  );
};

export default WeatherIcon;
