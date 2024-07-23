import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RewardsTable from './RewardsTable';

const mockRewards = {
    1: {
        May: { name: 'John Doe', points: 120 },
    },
    2: {
        June: { name: 'Jane Smith', points: 200 },
    },
    3: {
        July: { name: 'John Doe', points: 75 },
    },
};

test('renders rewards table correctly', () => {
    render(<RewardsTable rewards={mockRewards} />);

    // Check for multiple occurrences of 'John Doe'
    const johnDoeElements = screen.getAllByText('John Doe');
    expect(johnDoeElements).toHaveLength(2);

    // Check for other table contents
    expect(screen.getByText('May')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
    expect(screen.getByText('July')).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();

    // Check for 'Jane Smith'
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('June')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
});
