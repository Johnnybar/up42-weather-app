import React, { useEffect, useState } from "react";
import axios from "axios";
import { executeSlider } from "./features/slider";
import Hour from "./components/Hour/Hour";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import "./App.scss";
import {
  getDayInfo,
  createHoursArr,
  fetchDataAxios,
  fetchDataJson,
} from "./utils";
import apiInfo from "../src/assets/api-info.json";

function App() {
  const [hoursData, setHoursData] = useState<HourWeatherProps[]>([]);
  const [dayLocationInfo, setDayLocationInfo] = useState<DayLocationProps>();
  const [selectedHour, setSelectedHour] =
    useState<Optional<HourWeatherProps>>(null);

  const selectHour = (i: number, hoursArray: HourWeatherProps[]) => {
    const selectedHour = hoursArray[i];
    setSelectedHour(selectedHour);
  };

  useEffect(() => {
    executeSlider();
    //functioning api call
    // fetchDataAxios(apiInfo).then((data) => {
    //   console.log(data, "here");

    // });
    fetchDataJson(apiInfo)
      .then((data) => {
        console.log(data, "here json call");
        const { name } = data.city;
        const { dt_txt } = data.list[0];
        const hours = data.list.slice(0, 24);
        const dayInfoObj = getDayInfo(dt_txt, name, hours);
        setDayLocationInfo(dayInfoObj);
        const hoursArr = createHoursArr(hours);
        setHoursData(hoursArr);
        setSelectedHour(hoursArr[0]);
      })
      .catch((err) => console.log(error);
      );
  }, []);

  return (
    <div className="weather-app">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {selectedHour && <WeatherIcon type={selectedHour.weather} />}
          </div>
          {dayLocationInfo && selectedHour && (
            <div className="col-md-4">
              {selectedHour.weather}
              {dayLocationInfo.hiLoTemp}
              {selectedHour.temp}
            </div>
          )}
          {dayLocationInfo && hoursData && (
            <div className="col-md-4">
              <div>{dayLocationInfo.name}</div>
              <div>{dayLocationInfo.day}</div>
              <div>{dayLocationInfo.exactDate}</div>
            </div>
          )}
        </div>
      </div>
      <div className="scroll" style={{ overflowY: "auto", cursor: "grab" }}>
        <ul className="" style={{ display: "flex", width: "100%" }}>
          {hoursData &&
            hoursData.map((hour, i) => (
              // <li className="col-2" onClick={() => selectHour(i, hoursData)}>
              <Hour
                key={i}
                index={i}
                hour={hour}
                hoursData={hoursData}
                selectHour={selectHour}
              />
              // </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
