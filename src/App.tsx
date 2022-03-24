import { useEffect, useState } from "react";
import { executeSlider } from "./features/slider";
import TopViewContainer from "./components/TopViewContainer/TopViewContainer";
import BottomViewScroll from "./components/BottomViewScroll/BottomViewScroll";
import Error from "./components/Error/Error";
import Fallback from "./components/Fallback/Fallback";
import "./App.scss";
import { getWeatherData, fetchData } from "./utils";
import apiInfo from "../src/assets/api-info.json";

function App() {
  const [hoursData, setHoursData] = useState<HourWeatherProps[]>([]);
  const [error, setError] = useState<Optional<string>>(null);
  const [dayLocationInfo, setDayLocationInfo] = useState<DayLocationProps>();
  const [selectedHour, setSelectedHour] =
    useState<Optional<HourWeatherProps>>(null);

  const selectHour = (i: number) => {
    //remove previously selected and select current
    hoursData.forEach((hour, index) => {
      hour.selected = index === i ? true : false;
    });
    const selectedHour = hoursData[i];
    setSelectedHour(selectedHour);
  };

  useEffect(() => {
    executeSlider();

    fetchData(apiInfo)
      .then((data) => {
        const { dayInfoObj, hoursArr } = getWeatherData(data);
        //set to an obj with city name, day and date
        setDayLocationInfo(dayInfoObj);
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
        hoursData={hoursData}
      />
      <BottomViewScroll selectHour={selectHour} hoursData={hoursData} />
      {error && <Error message={error} />}

      {(!hoursData.length || !dayLocationInfo) && <Fallback />}
    </div>
  );
}

export default App;
