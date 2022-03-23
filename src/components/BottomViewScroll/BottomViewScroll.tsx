import Hour from "../Hour/Hour";

interface BottomViewProps {
  hoursData: HourWeatherProps[];
  selectHour: SelectHour;
}

const BottomViewScroll = ({ hoursData, selectHour }: BottomViewProps) => (
  <div
    className="weather-app__bottom-view scroll"
    style={{ overflowY: "auto", cursor: "grab" }}
  >
    <ul
      className="weather-app__bottom-view-hour-list"
      style={{ display: "flex", width: "100%" }}
    >
      {hoursData &&
        hoursData.map((hour, i) => (
          <Hour
            key={i}
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
