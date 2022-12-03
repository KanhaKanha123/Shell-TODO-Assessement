import { render, screen } from '@testing-library/react';
import AddToDo from '../AddToDo';
import renderer from 'react-test-renderer';
import Context from '../../../store/Context';

describe('AddToDo component test', () => {
    const mockFn = jest.fn();
    const toDoObj = { id: 0, value: 'check' }
    test("AddToDo component load correctly", () => {

        render(<AddToDo setToDoValues={mockFn} saveToDo={mockFn} toDoObj={toDoObj} />);

        const addToDoComponent = screen.getAllByTestId('add-todo-component');
        const addToDoTextBox = screen.getAllByTestId('add-todo-text-box');
        const addToDoSaveButton = screen.getAllByTestId('add-todo-save-button');
        // check element exist
        expect(addToDoComponent).toBeInTheDocument;
        expect(addToDoTextBox).toBeInTheDocument;
        expect(addToDoSaveButton).toBeInTheDocument;
    });


    test("AddToDo component should match snapshot", async () => {
        const element = await renderer.create(<AddToDo setToDoValues={mockFn} saveToDo={mockFn} toDoObj={toDoObj} />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
