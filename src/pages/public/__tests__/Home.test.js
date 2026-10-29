import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

function MockHome() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<MockHome />);
    const shpeText = screen.getAllByText(/Society of Hispanic Professional Engineers/i);
    expect(shpeText.length).toBeGreaterThan(0);
    const ufText = screen.getAllByText(/University of Florida/i);
    expect(ufText.length).toBeGreaterThan(0);
  });

  it('renders the Join SHPE National button', () => {
    render(<MockHome />);
    const joinButton = screen.getByText(/Join SHPE National/i);
    expect(joinButton).toBeInTheDocument();
    expect(joinButton.closest('a')).toHaveAttribute('href', 'https://www.shpeconnect.org');
  });

  it('renders the mission quote', () => {
    render(<MockHome />);
    const quoteText = screen.getAllByText(/Empowering the Hispanic community/i);
    expect(quoteText.length).toBeGreaterThan(0);
  });

  it('renders the Who are we section', () => {
    render(<MockHome />);
    const whoText = screen.getAllByText(/Who are we\?/i);
    expect(whoText.length).toBeGreaterThan(0);
    expect(screen.getByText(/Hispanic Engineering Society/i)).toBeInTheDocument();
  });

  it('renders the Mission section', () => {
    render(<MockHome />);
    const missionText = screen.getAllByText(/Mission/i);
    expect(missionText.length).toBeGreaterThan(0);
    expect(screen.getByText(/SHPE changes lives/i)).toBeInTheDocument();
  });

  it('renders the Vision section', () => {
    render(<MockHome />);
    const visionText = screen.getAllByText(/Vision/i);
    expect(visionText.length).toBeGreaterThan(0);
    expect(screen.getByText(/SHPE's vision is a world where Hispanics/i)).toBeInTheDocument();
  });

  it('renders the Ellen Ochoa quote', () => {
    render(<MockHome />);
    expect(screen.getByText(/Ellen Ochoa/i)).toBeInTheDocument();
    expect(screen.getByText(/Electrical Engineer & First Latina Astronaut/i)).toBeInTheDocument();
  });
});
