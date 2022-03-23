import React from "react";
import clouds from "../../assets/weather-cloud.svg";
import clear from "../../assets/weather-sun.svg";

interface WeatherIconProps {
  type: string;
}
const WeatherIcon = ({ type }: WeatherIconProps) => {
  return (
    <img
      className={`${type}-weather`}
      src={type === "Clear" ? clear : clouds}
      alt={`${type} weather icon`}
    />
  );
};

export default WeatherIcon;
