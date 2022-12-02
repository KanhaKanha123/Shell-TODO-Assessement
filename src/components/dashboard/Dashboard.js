import { Fragment, useState, useRef } from "react";
import ToDoList from '../to-do/ToDoList';
import { TODOAppState } from '../../Context';
import AddToDo from '../to-do/AddToDo';

const Dashboard = () => {
    const [toDoObj, setToDoValue] = useState({ id: 0, value: '' });
    const [listToDo, setlistToDo] = useState([]);
    const refEditState = useRef(null);
    const idRef = useRef(0);

    const { state } = TODOAppState() || { state: { isAddToDoShow: false } };

    console.log(state)
    const setToDoValues = (e) => {
        const { value } = e.target;
        setToDoValue({ id: idRef.current + 1, value: value });
    }

    const saveToDo = () => {
        if (refEditState.current) {
            const updatedToList = listToDo.map((item) => (item.id === parseInt(refEditState.current)) ? { ...item, value: toDoObj.value } : item);
            setlistToDo([...updatedToList]);
            refEditState.current = null;
        } else {
            setlistToDo(prevState => [...prevState, toDoObj]);
            idRef.current = idRef.current + 1;
        }
        setToDoValue({ id: 0, value: '' });
    }

    const editToDo = (itemObj) => {
        refEditState.current = itemObj.id;
        setToDoValue({ id: idRef.current + 1, value: itemObj.value });
    }

    const deleteToDo = (idToDelete) => {
        const filteredToList = listToDo.filter((item) => item.id != idToDelete);
        setlistToDo([...filteredToList]);
    }

    return (<Fragment>
        {state.isAddToDoShow && (<AddToDo setToDoValues={setToDoValues} saveToDo={saveToDo} toDoObj={toDoObj}></AddToDo>)}

        <ToDoList listToDo={listToDo} deleteToDo={deleteToDo} editToDo={editToDo}></ToDoList>
    </Fragment >)
}

export default Dashboard;