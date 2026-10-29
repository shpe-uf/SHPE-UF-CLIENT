import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import Register from '../Register';

const mocks = [];

function MockRegister() {
  return (
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </MockedProvider>
  );
}

describe('Register Page', () => {
  it('renders the registration form', () => {
    render(<MockRegister />);
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
  });

  it('renders the password requirements message', () => {
    render(<MockRegister />);
    expect(screen.getByText(/At least 8 characters/i)).toBeInTheDocument();
  });

  it('renders the ListServ checkbox', () => {
    render(<MockRegister />);
    expect(screen.getByText(/Would you like to be added to the ListServ/i)).toBeInTheDocument();
  });

  it('renders the Register button', () => {
    render(<MockRegister />);
    expect(screen.getByRole('button', { name: /Register/i })).toBeInTheDocument();
  });
});
