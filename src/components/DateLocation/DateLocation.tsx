interface DateLocationProps {
  dayLocationInfo: DayLocationProps;
}
const DateLocation = ({ dayLocationInfo }: DateLocationProps) => {
  return (
    <>
      <div>{dayLocationInfo.name}</div>
      <div>{dayLocationInfo.day}</div>
      <div>{dayLocationInfo.exactDate}</div>
    </>
  );
};
export default DateLocation;
