import React from 'react';
import "./index.css";


const ToDoList = (props) =>{
    const deleteItem = () =>{
        console.log("deleted");
    }
    return (
        <>
            <div className='todo_style'>
                <i className="fa fa-remove"
                    onClick={() =>{
                        props.onSelect(props.id);
                    }}
                ></i>
                <li>{props.text}</li>

            </div>
        </>
    );
};

export default ToDoList;