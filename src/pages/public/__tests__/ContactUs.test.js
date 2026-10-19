import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import ContactUs from '../ContactUs';

const mocks = [];

function MockContactUs() {
  return (
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    </MockedProvider>
  );
}

describe('Contact Us Page', () => {
  it('renders the Contact Us heading', () => {
    render(<MockContactUs />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('renders the Submit button', () => {
    render(<MockContactUs />);
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });
});
