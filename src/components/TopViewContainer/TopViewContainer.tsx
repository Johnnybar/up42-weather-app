import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import SelectedView from "../SelectedView/SelectedView";
import DateLocation from "../DateLocation/DateLocation";
import "./TopViewContainer.scss";

interface TopViewProps {
  selectedHour: HourWeatherProps | null;
  dayLocationInfo: DayLocationProps | undefined;
  hoursData: HourWeatherProps[];
}

const TopViewContainer = ({
  selectedHour,
  dayLocationInfo,
  hoursData,
}: TopViewProps) => {
  selectedHour = selectedHour || hoursData[0];
  return (
    <div className="weather-app__top-view container-fluid">
      <div className="row">
        <div className="col-md-4 weather-app__weather-icon-container">
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
  );
};

export default TopViewContainer;
