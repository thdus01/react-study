import React from 'react'

function TodoBoard(props) {
  return (
    <div>
      <h1>오늘의 할 일</h1>
      {props.todoList}
    </div>
  )
}

export default TodoBoard;
