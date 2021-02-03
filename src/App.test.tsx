import * as React from "react";
import { render, fireEvent } from "@testing-library/react";

import { App } from "./App";

//jest.mock("./api");
import { api } from "./api";
//const mockCreateItem = (jest.fn());

const mockCreateItem = (api.createItem = jest.fn());

test("Allow users to add items to their list", async () => {
  mockCreateItem.mockResolvedValueOnce({
    id: 123,
    test: "RTL Presentation Slides"
  });
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  fireEvent.change(input, { target: { value: "RTL Presentation Slides" } });
  fireEvent.click(getByText("Add #1"));

  await getByText("RTL Presentation Slides");
});
