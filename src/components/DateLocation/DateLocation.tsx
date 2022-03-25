import "./DateLocation.scss";

interface DateLocationProps {
  dayLocationInfo: DayLocationProps;
}

const DateLocation = ({ dayLocationInfo }: DateLocationProps) => {
  return (
    <div className="weather-app-date__location">
      <div className="weather-app-date-location__city">
        {dayLocationInfo.name}
      </div>
      <div className="weather-app-date-location__day">
        {dayLocationInfo.day}
      </div>
      <div className="weather-app-date-location__date">
        {dayLocationInfo.exactDate}
      </div>
    </div>
  );
};
export default DateLocation;
