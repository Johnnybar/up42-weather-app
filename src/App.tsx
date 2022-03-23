import React, { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { executeSlider } from "./features/slider";
import Hour from "../src/components/hour/Hour";
import WeatherIcon from "./components/WeatherIcon/WeatherIcon";
import "./App.scss";
import { getDayInfo, createHoursArr } from "./utils";

function App() {
  const [hoursData, setHoursData] = useState<HourWeatherProps[]>([]);
  const [dayLocationInfo, setDayLocationInfo] = useState<DayLocationProps>();

  const [selectedHour, setSelectedHour] =
    useState<Optional<HourWeatherProps>>(null);
  const fetchDataJson = async () => {
    try {
      const data = await fetch(`mock_data_hourly.json`);
      return data.json();
    } catch (error) {
      return error;
    }
  };
  // const fetchDataAxios = async () => {
  //   const params = new URLSearchParams();
  //   params.append("q", "M%C3%BCnchen,DE");
  //   params.append("appid", "b6907d289e10d714a6e88b30761fhowae22");
  //   try {
  //     let url = `/data/2.5/forecast/hourly`;

  //     const { data } = await axios.get(url, { params });

  //     return data;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  const selectHour = (i: number, hoursArray: HourWeatherProps[]) => {
    const selectedHour = hoursArray[i];
    setSelectedHour(selectedHour);
  };

  useEffect(() => {
    executeSlider();
    //functioning api call
    // fetchDataAxios().then((data) => {
    //   console.log(data, "here");

    //   return data;
    // });
    fetchDataJson()
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
        return data;
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="up42-app">
      <div className="container">
        <div className="row">
          {selectedHour && (
            <div className="col-md-4">
              <WeatherIcon type={selectedHour.weather} />
            </div>
          )}
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
      <div className=" scroll" style={{ overflowY: "auto", cursor: "grab" }}>
        <ul className="" style={{ display: "flex", width: "100%" }}>
          {hoursData &&
            hoursData.map((hour, i) => (
              <li className="col-2" onClick={() => selectHour(i, hoursData)}>
                <Hour index={i} hour={hour} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
