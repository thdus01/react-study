import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, removeItem, item, todoList, idx, value}) => {
  

  return (
    <>  
      <div className='todo-item'>
        {idx}. {value}, id: {item}
        <br />
        <button onClick={() => removeItem(id)} style={{marginTop: '20px'}}>삭제</button>
      </div>
    </>
  );
}

export default TodoItem;
