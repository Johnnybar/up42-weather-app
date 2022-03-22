import React, { SyntheticEvent, useEffect } from "react";
import axios from "axios";
import { executeSlider } from "./features/slider";
import "./App.scss";

function App() {
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

  useEffect(() => {
    executeSlider();
    //functioning api call
    // fetchDataAxios().then((data) => {
    //   console.log(data, "here");

    //   return data;

    // });
    fetchDataJson()
      .then((data) => {
        console.log(data, "here");

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
        <ul className="" style={{ display: "flex", width: "100%" }}>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
          <li className="col-2">
            <div>time</div>
            <div>icon</div>
            <div>degree</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
