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
      <div>{dayLocationInfo.day}</div>
      <div>{dayLocationInfo.exactDate}</div>
    </div>
  );
};
export default DateLocation;
