import React, { useEffect, useState } from "react";
type SelectHour = (i: number, hoursArray: []) => void;
interface Props {
  hour: HourWeatherProps;
  index: number;
}
const Hour = ({ hour, index }: Props) => {
  //     const [clickedHour, setClickedHour] = useState([])

  return (
    <>
      <div>{hour.time}</div>
      <div>{hour.temp}</div>
      <div>{hour.weather}</div>
    </>
  );
};
export default Hour;
