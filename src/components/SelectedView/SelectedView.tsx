import "./SelectedView.scss";

interface SelectedViewProps {
  hiLoTemp: string;
  selectedHour: HourWeatherProps;
}

const SelectedView = ({ hiLoTemp, selectedHour }: SelectedViewProps) => {
  return (
    <div className="weather-app__selected-view">
      <div className="weather-app__selected-view-info">
        <div className="weather-app__selected-view-weather">
          {selectedHour.weather}
        </div>
        <div className="weather-app__selected-view-hiLo-temp">{hiLoTemp}</div>
      </div>
      <div
        className="weather-app__selected-view-temprature text-center"
        data-testid="selected-view-temprature"
      >
        {selectedHour.temp}
      </div>
    </div>
  );
};
export default SelectedView;
