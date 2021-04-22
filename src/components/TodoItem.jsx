import { useState } from "react"


const TodoItem = ({ id, todo, dateTodo, completed, handleChangeCompletedTodo, deleteTodo, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);
    const [editedDateTodo, setEditedDateTodo] = useState(dateTodo);

    const handleSaveTodo = () => {
        editTodo(id, editedTodo, editedDateTodo);
        setIsEditing(false);
    }

    if(isEditing) {
        return (
            <div>
                <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                />

                <input 
                    type="date" 
                    onChange={(e)=>setEditedDateTodo(e.target.value)}
                    value={editedDateTodo}
                />

                <button className="edit" onClick={handleSaveTodo}>Save</button>
                <button className="edit cancel" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        )
    }


    return (
        <div className="todo">
            <div className="infoTodo">
                <input
                    id={`todo-${id}`}
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleChangeCompletedTodo(id)}
                />
                <label className="toDo" htmlFor={`todo-${id}`}>{todo}</label>
                <label className="dateTodo" htmlFor={`todo-${id}`}>{dateTodo}</label>
            </div>
            <div className="actions">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button
                    onClick={() => deleteTodo(id)}
                    className="remove"
                >Remove</button>
            </div>
        </div>
    )
}

export default TodoItem
