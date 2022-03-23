import { useEffect, useState } from "react";
import { executeSlider } from "./features/slider";
import TopViewContainer from "./components/TopViewContainer/TopViewContainer";
import BottomViewScroll from "./components/BottomViewScroll/BottomViewScroll";
import Error from "./components/Error/Error";
import "./App.scss";
import { getWeatherData, fetchDataJson, fetchDataAxios } from "./utils";
import apiInfo from "../src/assets/api-info.json";

function App() {
  const [hoursData, setHoursData] = useState<HourWeatherProps[]>([]);
  const [error, setError] = useState<Optional<string>>(null);
  const [dayLocationInfo, setDayLocationInfo] = useState<DayLocationProps>();
  const [selectedHour, setSelectedHour] =
    useState<Optional<HourWeatherProps>>(null);

  const selectHour = (i: number) => {
    const selectedHour = hoursData[i];

    setSelectedHour(selectedHour);
  };

  useEffect(() => {
    executeSlider();

    fetchDataJson(apiInfo)
      .then((data) => {
        console.log(data, "here json call");
        const { dayInfoObj, hoursArr } = getWeatherData(data);
        //set to an obj with city name, day and date
        setDayLocationInfo(dayInfoObj);
        //set hours to an array with 24 objects (hours) with 3 props
        setHoursData(hoursArr);
        //initialize the hour in the selected view to the first hour
        setSelectedHour(hoursArr[0]);
      })
      .catch((err) => {
        setError(err.message || "An Error Occured");
      });
  }, []);

  return (
    <div className="weather-app">
      <TopViewContainer
        dayLocationInfo={dayLocationInfo}
        selectedHour={selectedHour}
        hoursData={hoursData}
      />
      <BottomViewScroll selectHour={selectHour} hoursData={hoursData} />
      {error && <Error message={error} />}
    </div>
  );
}

export default App;
