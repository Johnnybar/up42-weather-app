import Hour from "../Hour/Hour";
import "./BottomViewScroll.scss";

interface BottomViewProps {
  hoursData: HourWeatherProps[];
  selectHour: SelectHour;
}

const BottomViewScroll = ({ hoursData, selectHour }: BottomViewProps) => (
  <div className="weather-app__bottom-view scroll">
    <ul className="weather-app__bottom-view-hour-list">
      {hoursData &&
        hoursData.map((hour, i) => (
          <Hour
            key={`${hour}_${i}`}
            index={i}
            hour={hour}
            hoursData={hoursData}
            selectHour={selectHour}
          />
        ))}
    </ul>
  </div>
);

export default BottomViewScroll;
