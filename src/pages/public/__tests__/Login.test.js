import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import Login from '../Login';

const mocks = [];

function MockLogin() {
  return (
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </MockedProvider>
  );
}

describe('Login Page', () => {
  it('renders the login form', () => {
    render(<MockLogin />);
    const loginText = screen.getAllByText(/Login/i);
    expect(loginText.length).toBeGreaterThan(0);
  });

  it('renders the Remember me checkbox', () => {
    render(<MockLogin />);
    const rememberText = screen.getAllByText(/Remember me/i);
    expect(rememberText.length).toBeGreaterThan(0);
  });

  it('renders the Forgot Password link', () => {
    render(<MockLogin />);
    const forgotLinks = screen.getAllByText(/Forgot Password/i);
    expect(forgotLinks.length).toBeGreaterThan(0);
  });

  it('renders the Register link', () => {
    render(<MockLogin />);
    const registerLinks = screen.getAllByText(/Register here/i);
    expect(registerLinks.length).toBeGreaterThan(0);
  });
});
