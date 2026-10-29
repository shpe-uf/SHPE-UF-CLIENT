import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../About';

function MockAbout() {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
}

describe('About Page', () => {
  it('renders the About Us heading', () => {
    render(<MockAbout />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('renders the History section', () => {
    render(<MockAbout />);
    expect(screen.getByText(/History/i)).toBeInTheDocument();
    const shpeText = screen.getAllByText(/Society of Hispanic Professional Engineers/i);
    expect(shpeText.length).toBeGreaterThan(0);
  });

  it('renders the UF Chapter section', () => {
    render(<MockAbout />);
    expect(screen.getByText(/UF Chapter/i)).toBeInTheDocument();
    const hisText = screen.getAllByText(/Hispanic Engineering Society/i);
    expect(hisText.length).toBeGreaterThan(0);
  });

  it('renders information about chapter growth', () => {
    render(<MockAbout />);
    expect(screen.getByText(/480 members/i)).toBeInTheDocument();
  });

  it('renders images', () => {
    render(<MockAbout />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});
