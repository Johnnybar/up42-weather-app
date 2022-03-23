import React, { useEffect, useState } from "react";
import axios from "axios";
import { executeSlider } from "./features/slider";
import Hour from "./components/Hour/Hour";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import DateLocation from "./components/DateLocation/DateLocation";
import SelectedView from "./components/SelectedView/SelectedView";
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
  const [error, setError] = useState<Optional<string>>(null);
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
      .catch((err) => setError(error));
  }, [error]);

  return (
    <div className="weather-app">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {selectedHour && <WeatherIcon type={selectedHour.weather} />}
          </div>
          <div className="col-md-4">
            {dayLocationInfo && selectedHour && (
              <SelectedView
                hiLoTemp={dayLocationInfo.hiLoTemp}
                selectedHour={selectedHour}
              />
            )}
          </div>
          <div className="col-md-4">
            {dayLocationInfo && hoursData && (
              <DateLocation dayLocationInfo={dayLocationInfo} />
            )}
          </div>
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
      {error && <div>The following error occurred: {error}</div>}
    </div>
  );
}

export default App;
