import { Fragment } from "react";

const ToDoList = ({ listToDo, deleteToDo, editToDo }) => {
    return (<Fragment>
        <section aria-label="to do list in table" className="to-do--list-container">
            {(listToDo || []).map((item, index) => <div data-testid="list-todo-component" className="to-do--list-inner-container" key={index}>
                <span aria-label="to do text" data-testid="list-todo-text-span" className="to-do--list-inner-item-one">{item.value}</span>
                <span aria-label="to do edit button" className="to-do--list-inner-item-two"><button data-testid="list-todo-edit-btn" onClick={() => editToDo(item)}>Edit</button></span>
                <span aria-label="to do delete button" className="to-do--list-inner-item-three"><button data-testid="list-todo-delete-btn" onClick={() => deleteToDo(item.id)}>Delete</button></span>
            </div>)}
        </section>
    </Fragment >)
}

export default ToDoList;