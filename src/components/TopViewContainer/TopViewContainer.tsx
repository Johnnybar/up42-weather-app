import React from "react";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import SelectedView from "../SelectedView/SelectedView";
import DateLocation from "../DateLocation/DateLocation";
import "./TopViewContainer.scss";

interface TopViewProps {
  selectedHour: HourWeatherProps | null;
  dayLocationInfo: DayLocationProps | null;
}

const TopViewContainer = ({ selectedHour, dayLocationInfo }: TopViewProps) => {
  return (
    <div className="weather-app-top-view container-fluid">
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
          {dayLocationInfo && (
            <DateLocation dayLocationInfo={dayLocationInfo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopViewContainer;
