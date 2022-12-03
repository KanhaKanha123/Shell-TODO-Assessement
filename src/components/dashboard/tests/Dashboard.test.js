import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import renderer from 'react-test-renderer';
import Context from '../../../store/Context';

describe('Dashboard component test', () => {

    const customRender = (ui, { providerProps, ...renderOptions }) => {
        return render(
            <Context.Provider {...providerProps}>{ui}</Context.Provider>,
            renderOptions,
        )
    }

    test("todolist component present", () => {

        const { container } = render(<Dashboard />);

        const listToDoComponent = container.querySelector('.to-do--list-container');

        // check element exist
        expect(listToDoComponent).toBeInTheDocument;
    });

    test.skip("Add TODO component present", () => {

        const providerProps = {
            isAddToDoShow: false,
        }
        const { container } = customRender(<Dashboard />, { providerProps })

        const addToDoComponent = container.querySelector('.tto-do-container');

        // check element exist
        expect(addToDoComponent).toBeInTheDocument;
    });


    test("Dashboard component should match snapshot", async () => {
        const element = await renderer.create(<Dashboard />);
        expect(element.toJSON()).toMatchSnapshot();
    });
});
