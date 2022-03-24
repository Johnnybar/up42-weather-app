import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import WeatherIcon from "./WeatherIcon";

describe("WeatherIcon", () => {
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

  test("renders correct WeatherIcon", () => {
    render(<WeatherIcon type={"Clear"} />, container);
    const selectedViewWeatherElement =
      screen.getByAltText(/Clear weather icon/i);
    expect(selectedViewWeatherElement).toBeInTheDocument();
  });
});
