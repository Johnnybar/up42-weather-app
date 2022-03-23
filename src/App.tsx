import React, { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { executeSlider } from "./features/slider";
import "./App.scss";

function App() {
  const [allData, setAllData] = useState([]);
  const [hoursData, setHoursData] = useState<HourWeatherProps[]>([]);
  const [dayLocationInfo, setDayLocationInfo] = useState<DayLocationProps>();

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

  const calculateDay = (num: number) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[num];
  };

  const calculateMonth = (num: number) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months[num];
  };

  const convertKelvinToCelcius = (deg: number) => {
    return Math.floor(deg - 273.15);
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
        const completeTime = new Date(dt_txt);
        const day = calculateDay(completeTime.getDay());
        const exactDate = `${completeTime.getDate()}.${calculateMonth(
          completeTime.getMonth()
        )}`;
        // const month = completeTime.getMonth();

        const hours = data.list.slice(0, 24);
        const tempratures = hours.map((hour: any) => {
          return convertKelvinToCelcius(hour.main.temp);
        });

        const hiLoTemp =
          String(Math.min(...tempratures)) +
          "/" +
          String(Math.max(...tempratures));
        console.log("this is date", completeTime);

        const dayInfo = { name, exactDate, day, hiLoTemp };
        console.log(dayInfo, "dayinfo");
        setDayLocationInfo(dayInfo);

        const hoursArr = hours.map((hour: any) => {
          let date = new Date(hour.dt_txt);
          const time = `${
            date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
          }:00`;
          return {
            time: time,
            weather: hour.weather[0].main,
            temp: convertKelvinToCelcius(hour.main.temp),
          };
        });
        console.log(hoursArr);
        setHoursData(hoursArr);
        // console.log(name, dt_txt, day, date, hours);
        return data;
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="up42-app">
      <div className="container">
        <div className="row">
          <div className="col-md-4">sky icon</div>
          <div className="col-md-4">weather</div>
          <div className="col-md-4">info </div>
        </div>
      </div>
      <div className=" scroll" style={{ overflowY: "auto", cursor: "grab" }}>
        <ul className="" style={{ display: "flex", width: "100%" }}></ul>
      </div>
    </div>
  );
}

export default App;
