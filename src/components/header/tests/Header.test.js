import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import Header from '../Header';
import renderer from 'react-test-renderer';

describe('Header component test', () => {
    const mockSetState = jest.fn();

    test("Header component load correctly", () => {

        render(<Header />);

        const header = screen.getAllByTestId('header');
        const headerText = screen.getAllByText(/TODO APP/i);
        const headerButton = screen.getAllByTestId('header-btn');

        // check element exist
        expect(header).toBeInTheDocument;
        expect(headerText).toBeInTheDocument;
        expect(headerButton).toBeInTheDocument;
    });

    test("addToDo method should be called", async () => {

        await act(() => { render(<Header />) });

        const headerButton = screen.getAllByTestId('header-btn');

        waitFor(() => {
            fireEvent.click(headerButton, { id: 1, value: 'check' })
            expect(mockSetState).toHaveBeenCalled;
        });
    });

    test("Header component should match snapshot", async () => {
        const element = await renderer.create(<Header />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
