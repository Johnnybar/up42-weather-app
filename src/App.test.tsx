import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";

describe("App", () => {
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

  test("renders app correctly", () => {
    render(<App />, container);
    const placeholderElement = screen.getByTestId(/app-test-id/i);
    expect(placeholderElement).toBeInTheDocument();
  });
});
