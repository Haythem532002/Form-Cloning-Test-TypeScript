import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Create from "./Components/Create";

test("renders from inputs and submit button", () => {
  render(<Create />);
  const emailInput = screen.getByLabelText("/email/i") as HTMLInputElement;
  const passwordInput = screen.getByLabelText(
    "/password/i"
  ) as HTMLInputElement;
  const experienceInput = screen.getByLabelText(
    "/experience/i"
  ) as HTMLSelectElement;
  const submitButton = screen.getByRole("button", { name: /create account/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(experienceInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: "haythem05@ieee.org" } });
  fireEvent.change(passwordInput, { target: { value: "haythem123" } });
  fireEvent.change(experienceInput, { target: { value: 1 } });

  expect(emailInput.value).toBe("haythem05@ieee.org");
  expect(passwordInput.value).toBe("password123");
  expect(experienceInput).toBe(1);

  fireEvent.click(submitButton);

  expect(window.alert).toHaveBeenCalledWith("Form Submitted Succesfully");
});
