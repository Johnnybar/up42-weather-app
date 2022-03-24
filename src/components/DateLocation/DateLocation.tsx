import "./DateLocation.scss";

interface DateLocationProps {
  dayLocationInfo: DayLocationProps;
}

const DateLocation = ({ dayLocationInfo }: DateLocationProps) => {
  return (
    <div className="weather-app__date-location">
      <div className="weather-app__date-location-city">
        {dayLocationInfo.name}
      </div>
      <div className="weather-app__date-location-day">
        {dayLocationInfo.day}
      </div>
      <div className="weather-app__date-location-date">
        {dayLocationInfo.exactDate}
      </div>
    </div>
  );
};
export default DateLocation;
