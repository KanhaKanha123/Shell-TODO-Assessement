import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundry';
import '@testing-library/jest-dom';

describe('ErrorBoundary component', () => {
    test('Error Boundary', () => {
        const ThrowError = () => {
            throw new Error('Test');
        };

        render(
            <ErrorBoundary fallback={<ErrorBoundary />}>
                <ThrowError />
            </ErrorBoundary>
        );

        expect(screen.getByTestId('error-boundary')).toBeVisible();
    });
});