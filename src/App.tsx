import { useEffect, useState } from "react";
import TopViewContainer from "./components/TopViewContainer/TopViewContainer";
import BottomViewScroll from "./components/BottomViewScroll/BottomViewScroll";
import Error from "./components/Error/Error";
import Fallback from "./components/Fallback/Fallback";
import { executeSlider } from "./features/slider";
import { getWeatherData, fetchData, selectFirstHour } from "./utils";
import apiInfo from "../src/assets/api-info.json";
import "./App.scss";

function App() {
  const [hoursData, setHoursData] = useState<HourWeatherProps[]>([]);
  const [dayLocationInfo, setDayLocationInfo] =
    useState<Optional<DayLocationProps>>(null);
  const [hourIndex, setHourIndex] = useState<number>(0);
  const [error, setError] = useState<Optional<string>>(null);
  const selectedHour: HourWeatherProps | null = hoursData[hourIndex];

  const selectHour = (i: number) => {
    //remove previously selected and select current
    let copyArray: HourWeatherProps[] = JSON.parse(JSON.stringify(hoursData));
    copyArray.forEach((hour, index) => {
      hour.selected = index === i ? true : false;
    });
    setHourIndex(i);
    setHoursData(copyArray);
  };

  useEffect(() => {
    executeSlider();

    fetchData(apiInfo)
      .then((data) => {
        let { dayInfoObj, hoursArr } = getWeatherData(data);
        //set to an obj with city name, day and date
        setDayLocationInfo(dayInfoObj);
        // Mark first hour as selected
        hoursArr = selectFirstHour(hoursArr);
        //set hours to an array with 24 objects (hours) with 3 props
        setHoursData(hoursArr);
      })
      .catch((err) => {
        setError(err.message || "An Error Occured");
      });
  }, []);

  return (
    <div className="weather-app" data-testid="app-test-id">
      <TopViewContainer
        dayLocationInfo={dayLocationInfo}
        selectedHour={selectedHour}
      />
      <BottomViewScroll selectHour={selectHour} hoursData={hoursData} />
      {error && <Error message={error} />}
      {(!hoursData.length || !dayLocationInfo) && <Fallback />}
    </div>
  );
}

export default App;
