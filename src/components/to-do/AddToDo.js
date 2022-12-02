import { Fragment } from "react";

const AddToDo = ({ saveToDo, setToDoValues, toDoObj }) => {
    return (<Fragment>
        <section aria-label="add todo form with text box" data-testid="add-todo-component" className="to-do-container">
            <input aria-label="add todo text box" data-testid="add-todo-text-box" className="text-add-todo" type="text" placeholder="Add New TODO" onChange={(e) => setToDoValues(e)} value={toDoObj.value}></input>
            <button aria-label="add todo save button" data-testid="add-todo-save-button" className="button" onClick={() => saveToDo()}>Save</button>
        </section>
    </Fragment >)
}

export default AddToDo;