import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import BottomViewScroll from "./BottomViewScroll";
import { mockHoursData, mockSelectHour } from "../../mocks";

describe("BottomViewScroll", () => {
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

  test("renders BottomViewScroll", () => {
    render(
      <BottomViewScroll
        hoursData={mockHoursData}
        selectHour={mockSelectHour}
      />,
      container
    );
    const cityElement = screen.getByText(/15:00/i);
    expect(cityElement).toBeInTheDocument();
  });
});
