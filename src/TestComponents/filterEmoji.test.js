import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "../App";

test("emoji filtreleme işlemi", () => {
    render(<App />);
    const item = screen.getByText("100");
    expect(item).toBeInTheDocument("100");
  });