import "./SelectedView.scss";

interface SelectedViewProps {
  hiLoTemp: string;
  selectedHour: HourWeatherProps;
}

const SelectedView = ({ hiLoTemp, selectedHour }: SelectedViewProps) => {
  return (
    <div className="weather-app-selected-view">
      <div className="weather-app-selected-view__info">
        <div className="weather-app-selected-view__weather">
          {selectedHour.weather}
        </div>
        <div className="weather-app-selected-view__hiLo-temp">{hiLoTemp}</div>
      </div>
      <div
        className="weather-app-selected-view__temprature text-center"
        data-testid="selected-view-temprature"
      >
        {selectedHour.temp}
      </div>
    </div>
  );
};
export default SelectedView;
