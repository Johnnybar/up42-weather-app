import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Hour from "./Hour";
import { mockHour, mockHoursData } from "../../mocks";

describe("Hour", () => {
  let container: any;

  const mockSelectHour = (i: number, arr: HourWeatherProps[]) => {
    return;
  };
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders Hour", () => {
    render(
      <Hour
        index={1}
        hour={mockHour}
        hoursData={mockHoursData}
        selectHour={mockSelectHour}
      />,
      container
    );
    const hourTimeElement = screen.getByText(/19:00/i);
    expect(hourTimeElement).toBeInTheDocument();
  });

  test("renders selected hour with background color", () => {
    render(
      <Hour
        index={1}
        hour={mockHour}
        hoursData={mockHoursData}
        selectHour={mockSelectHour}
      />,
      container
    );
    const selectedHour = screen.getByText(/19:00/i);
    expect(selectedHour).toHaveClass("selected");
  });
});
