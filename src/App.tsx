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
  createSingleDayHours,
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
        const singleDayHours = data.list.slice(0, 24);
        const dayInfoObj = getDayInfo(dt_txt, name, singleDayHours);
        const hoursArr = createSingleDayHours(singleDayHours);
        setDayLocationInfo(dayInfoObj);
        setHoursData(hoursArr);
        setSelectedHour(hoursArr[0]);
      })
      .catch((err) => setError(error));
  }, [error]);

  return (
    <div className="weather-app">
      <div className="weather-app__top-view container">
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
      <div
        className="weather-app__bottom-view scroll"
        style={{ overflowY: "auto", cursor: "grab" }}
      >
        <ul
          className="weather-app__bottom-view-hour-list"
          style={{ display: "flex", width: "100%" }}
        >
          {hoursData &&
            hoursData.map((hour, i) => (
              <Hour
                key={i}
                index={i}
                hour={hour}
                hoursData={hoursData}
                selectHour={selectHour}
              />
            ))}
        </ul>
      </div>
      {error && (
        <div className="weather-app__error">
          The following error occurred: {error}
        </div>
      )}
    </div>
  );
}

export default App;
