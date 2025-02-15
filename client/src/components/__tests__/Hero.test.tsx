import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../Hero';

// Wrap tests in an error boundary to catch any rendering errors
describe('Hero Component', () => {
  beforeEach(() => {
    // Reset any attached event listeners/handlers between tests
    document.body.innerHTML = '';
  });

  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('displays the main heading', () => {
    render(<Hero />);
    expect(
      screen.getByText('Professional Dryer Vent Cleaning in St. Louis')
    ).toBeInTheDocument();
  });

  it('displays the subheading text', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Safe, reliable, and affordable dryer vent cleaning services/)
    ).toBeInTheDocument();
  });

  it('has a working phone number button', () => {
    render(<Hero />);
    const phoneButton = screen.getByRole('link', { name: /call/i });
    expect(phoneButton).toHaveAttribute('href', 'tel:314-555-0123');
  });

  it('has a working schedule service button', () => {
    render(<Hero />);
    const scheduleButton = screen.getByRole('link', { name: /schedule service/i });
    expect(scheduleButton).toHaveAttribute('href', '#contact-form');
  });

  it('displays the hero image', () => {
    render(<Hero />);
    const image = screen.getByAltText('Professional dryer vent cleaning service');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('Dryer+Vent+Cleaning'));
  });
});