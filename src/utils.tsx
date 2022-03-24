import axios from "axios";

export const calculateDay = (num: number) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[num];
};

export const calculateMonth = (num: number) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[num];
};

export const convertKelvinToCelcius = (deg: number) => {
  return Math.floor(deg - 273.15);
};

const getDayInfo = (dateAndTime: string, name: string, hours: []) => {
  const tempratures = hours.map((hour: any) => {
    return convertKelvinToCelcius(hour.main.temp);
  });

  const hiLoTemp =
    String(Math.min(...tempratures)) +
    "°/" +
    String(Math.max(...tempratures)) +
    "°";
  const completeTime = new Date(dateAndTime);
  const day = calculateDay(completeTime.getDay());
  const exactDate = `${completeTime.getDate()}.${calculateMonth(
    completeTime.getMonth()
  )}`;

  return {
    name,
    day,
    exactDate,
    hiLoTemp,
  };
};

const createSingleDayHours = (
  hours: HourWeatherProps[]
): HourWeatherProps[] => {
  return hours.map((hour: any) => {
    //is i necessary?
    let date = new Date(hour.dt_txt);
    const time = `${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:00`;
    return {
      time: time,
      weather: hour.weather[0].main,
      temp: convertKelvinToCelcius(hour.main.temp) + "°",
      selected: false,
    };
  });
};

export const fetchDataAxios = async (obj: APIProps) => {
  const params = new URLSearchParams();
  params.append("q", obj["q"]);
  params.append("appid", obj["appid"]);
  try {
    let url = obj["url"];

    const { data } = await axios.get(url, { params });

    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDataJson = async (obj: APIProps) => {
  try {
    const data = await fetch(`mock_data_hourly.json`);
    return data.json();
  } catch (error) {
    return error;
  }
};

export const getWeatherData = (data: any) => {
  const { name } = data.city;
  const { dt_txt } = data.list[0];
  const singleDayHours = data.list.slice(0, 24);
  const dayInfoObj = getDayInfo(dt_txt, name, singleDayHours);
  const hoursArr = createSingleDayHours(singleDayHours);
  return { dayInfoObj, hoursArr };
};
