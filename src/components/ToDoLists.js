import React from 'react'

export default function ToDoLists(props) {

    const deleteToDo = (title) => {
        props.setToDoList(props.toDoList.filter(toDo => toDo.title !== title));
        
        
    }

    const toggleEffect = (e, index) => {

        //If para poder eliminar el botón ya que si no prima el 
        //click del li
        if(e.target.tagName !== "BUTTON") {
            const newToDoList = [...props.toDoList];
            newToDoList[index].completed = !newToDoList[index].completed;
            props.setToDoList(newToDoList);
        }
    }
   
 
    return (
        <div className="text-left">
            {
            props.toDoList.map((thing, index) => {
                return <ul className="list-group">
                    <li className={thing.completed?"list-group-item list-group-item-secondary" : "list-group-item"} 
                    onClick={e => toggleEffect(e, index)}>To Do: {index}: {thing.title}{thing.completed}
                    <button id={thing.title} onClick={() => deleteToDo(thing.title)} className="btn btn-danger float-right">X</button></li>
                </ul>
            })
            
            }  
            
        </div>
    )
}

