interface HourWeatherProps {
  weather: string;
  time: string;
  temp: string;
  selected: boolean;
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

type calculateDay = (num: number) => string;

type calculateMonth = (num: number) => string;

type convertKelvinToCelcius = (deg: number) => number;

type getDayInfo = (
  dateAndTime: string,
  name: string,
  hours: []
) => {
  name: string;
  day: string;
  exactDate: string;
  hiLoTemp: string;
};

type createSingleDayHours = (hours: HourWeatherProps[]) => HourWeatherProps[];

type fetchDataAxios = (obj: APIProps) => Promise<any>;

type getWeatherData = (data: any) => {
  dayInfoObj: {
    name: string;
    day: string;
    exactDate: string;
    hiLoTemp: string;
  };
  hoursArr: HourWeatherProps[];
};
