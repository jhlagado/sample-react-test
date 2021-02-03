import React from "react";
import { render } from "@testing-library/react";

import { App } from "./App";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOS");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});
