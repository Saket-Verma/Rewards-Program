import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

const ProblematicComponent = () => {
    throw new Error('Error thrown');
};

test('catches errors and displays fallback UI', () => {
    // Suppress console.error temporarily
    const originalError = console.error;
    console.error = jest.fn();

    const { getByText } = render(
        <ErrorBoundary>
            <ProblematicComponent />
        </ErrorBoundary>
    );

    expect(getByText('Something went wrong.')).toBeInTheDocument();
});
