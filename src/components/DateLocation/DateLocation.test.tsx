import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import DateLocation from "./DateLocation";
import { mockDayLocationInfo } from "../../mocks";

describe("DateLocation", () => {
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

  test("renders Date Location information correctly", () => {
    render(<DateLocation dayLocationInfo={mockDayLocationInfo} />, container);
    const cityElement = screen.getByText(/Berlin/i);
    expect(cityElement).toBeInTheDocument();
  });
});
