import { render, screen } from "@testing-library/react";
import LoginForm from "../components/loginForm";
import userEvent from "@testing-library/user-event";

describe("loginTest Component", () => {
  test("being checked with username and password entered ", () => {
    render(<LoginForm/>)

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)

    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  });

  test("being checked with username and password entered ", () => {
    const submit = jest.fn();
    render(<LoginForm submit={submit}/>)

    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);;

    userEvent.type(username, "abebe");
    userEvent.type(password, "pass1234")
    userEvent.click(submitButton);

    expect(submit).toHaveBeenCalledWith({
      username:"abebe",
      password:"pass1234"
    });

  });

  test("with username and password entered", () => {
    render(<LoginForm />);

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(username, "abebe@gmail.com")
    userEvent.type(password, "pass1234")

    expect(submitButton).toBeEnabled()
  });
  
  test("with username entered and password not entered", () => {
    render(<LoginForm />);

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(username, "abebe@gmail.com")
    userEvent.type(password, "")

    expect(submitButton).toBeDisabled()
  });

  test("with username not entered and password entered", () => {
    render(<LoginForm />);

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(username, "")
    userEvent.type(password, "pass1234")

    expect(submitButton).toBeDisabled()
  });

  test("with username not entered and password not entered", () => {
    render(<LoginForm />);

    const username = screen.getByLabelText(/username/i)
    const password = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(username, "")
    userEvent.type(password, "")

    expect(submitButton).toBeDisabled()
  });
  
});