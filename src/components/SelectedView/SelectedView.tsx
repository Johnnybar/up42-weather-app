interface SelectedViewProps {
  hiLoTemp: string;
  selectedHour: HourWeatherProps;
}
const SelectedView = ({ hiLoTemp, selectedHour }: SelectedViewProps) => {
  return (
    <>
      {selectedHour.weather}
      {hiLoTemp}
      {selectedHour.temp}
    </>
  );
};
export default SelectedView;
