
import {useState} from 'react';

export default function Input({ setToDoList }) {

    const[input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setToDoList(currentTodos => [{title: input, completed:false}, ...currentTodos]);

        setInput("");
    }
    return (
        <form onSubmit = {handleSubmit} className="my-4 mx-4">
            <input type="text"
            placeholder="Introduce a new task"
            className="form-control"
            onChange={e => setInput(e.target.value)}
            //Siempre en los formularios
            value={input} /> 

        </form>
    )
}
