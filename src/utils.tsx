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
export const getDayInfo = (dateAndTime: string, name: string, hours: []) => {
  const tempratures = hours.map((hour: any) => {
    return convertKelvinToCelcius(hour.main.temp);
  });

  const hiLoTemp =
    String(Math.min(...tempratures)) + "/" + String(Math.max(...tempratures));
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

export const createHoursArr = (hours: []): HourWeatherProps[] => {
  return hours.map((hour: any) => {
    let date = new Date(hour.dt_txt);
    const time = `${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:00`;
    return {
      time: time,
      weather: hour.weather[0].main,
      temp: convertKelvinToCelcius(hour.main.temp),
    };
  });
};
