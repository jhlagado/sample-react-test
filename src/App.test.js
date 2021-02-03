import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { App } from "./App";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOS");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

x test("Allow users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  fireEvent.change(input, {target:{value: "RTL Presentaion Slides"}});
  fireEvent.click(getByText("Add #1"));

  getByText("RTL Presentaion Sl ides");
  getByText("Add #2");
});
