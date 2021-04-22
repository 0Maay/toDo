import { useState } from "react";
import { nanoid } from "nanoid";

const Formulario = ({ todos, setTodos }) => {

    const [todo, setTodo] = useState("");
    const [dateTodo, setDateTodo] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        if(todo.length < 1){
            return;
        }
        setTodos([{ id: nanoid(3), todo, dateTodo, completed: false }, ...todos]);
        setTodo("");
        setDateTodo("");
    }
    
    const today = new Date();
    const date = today.getFullYear()+ '-' + (today.getMonth()+1) + '-' +today.getDate();


    return (
        <form onSubmit={handleSumbit}>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                placeholder="Conquer the world!"
            />
            
            <div className="labels">
                <label htmlFor="date">Select date</label>
            </div>

            <div className="">
                <input type="date" id="date"
                    onChange={(e)=>setDateTodo(e.target.value)}
                    value={dateTodo}
                    min={date}
                />
            </div>

            <button>Add task</button>
        </form>
    )
}

export default Formulario
