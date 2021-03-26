import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

jest.mock('../mocks/mockColors');

const mockColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  }
]

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  const { rerender } = render(<BubblePage mockColors={[]} />);
  
  const loading = screen.getByText(/bubbles/i);
  expect(loading).toBeInTheDocument();

  rerender(<BubblePage mockColors={mockColors} />);
});