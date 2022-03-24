import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import SelectedView from "./SelectedView";
import { mockHiLoTemp, mockSelectedHour } from "../../mocks";
describe("SelectedView", () => {
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

  test("renders Selected View", () => {
    render(
      <SelectedView hiLoTemp={mockHiLoTemp} selectedHour={mockSelectedHour} />,
      container
    );
    const selectedViewWeatherElement = screen.getByText(/Clouds/i);
    expect(selectedViewWeatherElement).toBeInTheDocument();
  });
});
