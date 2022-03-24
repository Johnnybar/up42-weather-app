import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import TopViewContainer from "./TopViewContainer";
import BottomViewScroll from "../BottomViewScroll/BottomViewScroll";
import {
  mockHoursData,
  mockDayLocationInfo,
  mockSelectedHour,
  mockSelectHour,
} from "../../mocks";

describe("TopViewContainer", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders TopViewContainer", () => {
    render(
      <TopViewContainer
        selectedHour={mockSelectedHour}
        dayLocationInfo={mockDayLocationInfo}
        hoursData={mockHoursData}
      />,
      container
    );
    const cityElement = screen.getByText(/Berlin/i);
    expect(cityElement).toBeInTheDocument();
  });

  test("verifies that hour selected is same rendered in the selected view,", () => {
    render(
      <>
        <TopViewContainer
          selectedHour={mockSelectedHour}
          dayLocationInfo={mockDayLocationInfo}
          hoursData={mockHoursData}
        />
        ,
        <BottomViewScroll
          hoursData={mockHoursData}
          selectHour={mockSelectHour}
        />
      </>,
      container
    );
    const selectedViewWeatherElement = screen.getByTestId(
      /selected-view-temprature/i
    );
    const selectedHourElement = screen.getByTestId(/selected-hour/i);
    expect(selectedViewWeatherElement.innerHTML).toBe(
      selectedHourElement.innerHTML
    );
  });
});
