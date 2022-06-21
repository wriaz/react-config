import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("renders learn react link", () => {
  render(<Form />);
  const input = screen.getByTestId("inputField");
  fireEvent.change(input, { target: { value: "something" } });
  expect(input.value).toEqual("something");

  const submit = screen.getByText(/submit/i);
  fireEvent.click(submit);
  expect(input.value).toEqual("");
});
