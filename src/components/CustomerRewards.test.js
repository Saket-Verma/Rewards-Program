import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerRewards from './CustomerRewards';
import * as api from '../services/api';

jest.mock('../services/api');

const mockTransactions = [
    { customerId: 1, name: 'John Doe', amount: 120, date: '2024-05-01' },
    { customerId: 1, name: 'John Doe', amount: 75, date: '2024-07-15' },
    { customerId: 2, name: 'Jane Smith', amount: 200, date: '2024-06-01' },
];

test('renders customer rewards correctly', async () => {
    api.fetchTransactions.mockResolvedValue(mockTransactions);

    render(<CustomerRewards />);

    await waitFor(() => {
        const johnDoeElements = screen.getAllByText('John Doe');
        expect(johnDoeElements).toHaveLength(2);

        expect(screen.getByText('May')).toBeInTheDocument();
        expect(screen.getByText('90')).toBeInTheDocument();
        expect(screen.getByText('July')).toBeInTheDocument();
        expect(screen.getByText('25')).toBeInTheDocument();

        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('June')).toBeInTheDocument();
        expect(screen.getByText('250')).toBeInTheDocument();
    });
});

test('displays error message when fetch fails', async () => {
    api.fetchTransactions.mockRejectedValue(new Error('Failed to fetch'));

    render(<CustomerRewards />);

    await waitFor(() => {
        expect(screen.getByText('Error loading transactions.')).toBeInTheDocument();
    });
});
