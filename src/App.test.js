import { render, screen } from '@testing-library/react';
import App from './App';

test('renders table headers', () => {
    render(<App />);
    const customerHeader = screen.getByText(/Customer/i);
    const monthHeader = screen.getByText(/Month/i);
    const pointsHeader = screen.getByText(/Points/i);

    expect(customerHeader).toBeInTheDocument();
    expect(monthHeader).toBeInTheDocument();
    expect(pointsHeader).toBeInTheDocument();
});