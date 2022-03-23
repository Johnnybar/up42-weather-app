import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import SelectedView from '../SelectedView/SelectedView';
import DateLocation from '../DateLocation/DateLocation';

interface TopViewProps {
    selectedHour: HourWeatherProps | null;
    dayLocationInfo: DayLocationProps | undefined;
    hoursData: HourWeatherProps[];
  }

const TopViewContainer = ({ selectedHour, dayLocationInfo, hoursData }: TopViewProps) => (
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
  );

export default TopViewContainer;
