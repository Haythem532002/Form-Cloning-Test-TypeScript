import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Create from "./Components/Create";

test("renders from inputs and submit button", () => {
  render(<Create />);
  const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
  const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
  const experienceInput = screen.getByLabelText(
    "Year of experience"
  ) as HTMLSelectElement;
  const submitButton = screen.getByRole("button", { name: "Create Account" });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(experienceInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: "haythem05@ieee.org" } });
  fireEvent.change(passwordInput, { target: { value: "haythem123" } });
  fireEvent.change(experienceInput, { target: { value: "1" } });

  expect(emailInput.value).toBe("haythem05@ieee.org");
  expect(passwordInput.value).toBe("haythem123");
  expect(experienceInput.value).toBe("1");

  fireEvent.click(submitButton);

  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

  fireEvent.click(submitButton);

  expect(alertMock).toHaveBeenCalledWith("Form Submitted Succesfully");

  alertMock.mockRestore();
});
