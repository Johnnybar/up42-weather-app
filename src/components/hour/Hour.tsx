import React, { useEffect, useState } from "react";
type SelectHour = (i: number, hoursArray: []) => void;
interface HourProps {
  index: number;
  hour: HourWeatherProps;
  hoursData: HourWeatherProps[];
  selectHour: SelectHour;
}
const Hour = ({ index, hour, hoursData, selectHour }: HourProps) => {
  return (
    <li className="col-2" onClick={() => selectHour(index, hoursData as [])}>
      <div>{hour.time}</div>
      <div>{hour.temp}</div>
      <div>{hour.weather}</div>
    </li>
  );
};
export default Hour;
