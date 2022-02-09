import React from 'react';

const TodoList = (props) => {

  return (
    <>
      <div className='todolist'>
        <li> {props.text} </li>
        <button onClick={() => {
          props.onSelect(props.id)
        }}>delete</button>
      </div>
    </>
  );
};

export default TodoList;