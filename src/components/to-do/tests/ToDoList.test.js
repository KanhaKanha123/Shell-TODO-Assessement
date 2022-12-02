import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import ToDoList from '../ToDoList';
import renderer from 'react-test-renderer';

describe('ToDoList component test', () => {
    const mockFnDeleteToDo = jest.fn();
    const mockFnEditToDo = jest.fn();
    const listToDo = [{ id: 0, value: 'check' }]
    test("ToDoList component load correctly", () => {

        render(<ToDoList listToDo={listToDo} deleteToDo={mockFnDeleteToDo} editToDo={mockFnEditToDo} />);

        const listToDoComponent = screen.getAllByTestId('list-todo-component');
        const listToDoTextSpan = screen.getAllByTestId('list-todo-text-span');
        const deleteBtn = screen.getAllByTestId('list-todo-delete-btn');
        const editBtn = screen.getAllByTestId('list-todo-edit-btn');

        // check element exist
        expect(listToDoComponent).toBeInTheDocument;
        expect(listToDoTextSpan).toBeInTheDocument;
        expect(deleteBtn).toBeInTheDocument;
        expect(editBtn).toBeInTheDocument;
    });

    test("deleteToDo method should be called", async () => {

        await act(() => { render(<ToDoList listToDo={listToDo} deleteToDo={mockFnDeleteToDo} editToDo={mockFnEditToDo} />) });

        const deleteBtn = screen.getAllByTestId('list-todo-delete-btn');

        waitFor(() => {
            fireEvent.click(deleteBtn, { id: 1, value: 'check' })
            expect(mockFnDeleteToDo).toHaveBeenCalled;
        });
    });

    test("editToDo method should be called", async () => {

        await act(() => { render(<ToDoList listToDo={listToDo} deleteToDo={mockFnDeleteToDo} editToDo={mockFnEditToDo} />) });

        const editBtn = screen.getAllByTestId('list-todo-edit-btn');

        waitFor(() => {
            fireEvent.click(editBtn, { id: 1, value: 'check' })
            expect(mockFnDeleteToDo).toHaveBeenCalled;
        });
    });

    test("ToDoList component should match snapshot", async () => {
        const element = await renderer.create(<ToDoList listToDo={listToDo} deleteToDo={mockFnDeleteToDo} editToDo={mockFnEditToDo} />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
