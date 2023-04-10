import React from 'react';
import TodoItem from './TodoItem';

const TodoBoard = ({ todoList, removeItem }) => {
  return (
    <div>
      <h1>오늘의 할 일</h1>
      {todoList && todoList.map((item, id) => (
        <TodoItem key={item} 
            item={item.id}
            value={item.value} 
            removeItem={removeItem} 
            idx={todoList.indexOf(item)} />
      ))}
    </div>
  );
};

export default TodoBoard;
