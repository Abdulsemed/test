
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please enter both a username and password.');
    } else {
        if(username=="trial@gmail.com" && password=="1234"){
          console.log(username, password);
          event.preventDefault();
          sessionStorage.setItem('username', username);
          navigate("/", { replace: true });
          window.location.reload();
        }
        else{
    
        }
    }
  };

  return (
    <div className="form-container">
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" id="eamail" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

import { render, screen } from "@testing-library/react";
import LoginForm from "../components/Login";
import userEvent from "@testing-library/user-event";

describe("loginTest Component", () => {
  test("with email and password entered", () => {
    render(<LoginForm />);

    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByPlaceholderText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(email, "abebe@gmail.com")
    userEvent.type(password, "pass1234")

    expect(submitButton).toBeEnabled()
  });
  
  test("with email entered and password not entered", () => {
    render(<LoginForm />);

    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByPlaceholderText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(email, "abebe@gmail.com")
    userEvent.type(password, "")

    expect(submitButton).toBeDisabled()
  });

  test("with email not entered and password entered", () => {
    render(<LoginForm />);

    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByPlaceholderText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(email, "")
    userEvent.type(password, "pass1234")

    expect(submitButton).toBeDisabled()
  });

  test("with email not entered and password not entered", () => {
    render(<LoginForm />);

    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByPlaceholderText(/submit/i)

    expect(submitButton).toBeDisabled()

    userEvent.type(email, "")
    userEvent.type(password, "")

    expect(submitButton).toBeDisabled()
  });
  
});