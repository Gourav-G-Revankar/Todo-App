import React, { useState } from "react";
import TodoList from './TodoList';

import './App.css';

function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text"
            placeholder="Enter Name"
            value={inputList}
            onChange={itemEvent} />
          <button onClick={listOfItems}>Add</button>
        </div>

        <ol>
          {items.map((itemVal, index) => {
            return <TodoList
              key={index}
              id={index}
              text={itemVal}
              onSelect={deleteItems} />
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
