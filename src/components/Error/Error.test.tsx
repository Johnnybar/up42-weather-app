import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Error from "./Error";
import { mockError } from "../../mocks";

describe("Error", () => {
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

  test("renders error with message correctly", () => {
    render(<Error message={mockError} />, container);
    const errorText = screen.getByText(/Error description/i);
    expect(errorText).toBeInTheDocument();
  });
});
