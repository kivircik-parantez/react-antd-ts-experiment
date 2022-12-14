import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App.tsx", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: "Ghost(disabled)" })
  ).toBeDisabled();
});
