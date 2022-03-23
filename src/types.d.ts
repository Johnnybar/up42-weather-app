interface HourWeatherProps {
  weather: string;
  time: string;
  temp: number;
}
interface DayLocationProps {
  name: string;
  day: string;
  exactDate: string;
  hiLoTemp: string;
}

interface APIProps {
  appid: string;
  q: string;
  url: string;
}
type Optional<T> = T | null;

type SelectHour = (i: number, hoursArray: HourWeatherProps[]) => void;
//  type SelectHour = (i: number, hoursArray: []) => void;
