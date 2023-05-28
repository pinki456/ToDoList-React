import React,{useState} from 'react';
import "./index.css";
import ToDoList from './ToDoLists';

const App = () => {
    const [inputList,setInputList] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };

    const listOfItems = () =>{
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItem = (id) =>{
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((arrEle,index) => {
                return index !== id;
            });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className='center_div'>
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text"
                        placeholder='Add an Item'
                        onChange={itemEvent}
                        value={inputList}
                    />
                    <button onClick={listOfItems}> + </button>


                    <ol>
                        {Items.map((itemsVal,index) =>{
                            return <ToDoList 
                            key={index}
                            id={index}
                            text={itemsVal}
                            onSelect={deleteItem} />
                            //return <li>{itemsVal}</li>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;