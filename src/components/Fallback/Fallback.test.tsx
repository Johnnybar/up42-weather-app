import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Fallback from "./Fallback";

describe("Fallback", () => {
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

  test("renders fallback with message correctly", () => {
    render(<Fallback />, container);
    const fallbackText = screen.getByText(/Please wait/i);
    expect(fallbackText).toBeInTheDocument();
  });
});
