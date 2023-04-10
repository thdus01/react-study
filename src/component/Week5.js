import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import TodoBoard from '../component1/TodoBoard';
import TodoItem from '../component1/TodoItem';
import ColoredMessage from '../component1/ColoredMessage';

function Week5() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [num, setNum] = useState(0);
  const id = useRef(1);

  const addItem = () => {
    console.log('inputValue =', inputValue);

    const newData = {
      value: inputValue,
      id: id.current
    }
    id.current += 1;
    // 기존 todoList에 inputValue 추가
    setTodoList([...todoList, newData]);
    // setInputValue('');
 
  };

  // filter 함수로 todoList를 초기화 하고
  // 기존 state를 복사해서 새로운 inputvalue를 추가한다.

  const removeItem = (id) => {

    // filter 함수는 주어진 조건에 맞는 요소들로 이루어진 새로운 배열 반환
    const newValue = todoList.filter((todoLists) => { return todoLists !== id });
    setTodoList(newValue);
    console.log(todoList);
  };

  const removeAllItem = () => {
    setTodoList([]);
    id.current = 1;
  }

  const initailize = () => {
   
  setTodoList([]);

}

  const xx = () => {
    alert('버튼 클릭했네요.');
    setNum(num + 1);
  };

  return (
    <>
      <Navbar />
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={addItem}> 할 일 추가 </button>
      <button onClick={() => initailize()}>전체 삭제</button>
      <button onClick={removeAllItem}>완전 삭제</button>

      <TodoBoard todoList={todoList} removeItem={removeItem} />

      <hr />

      <h1 style={{ color: 'red' }}>안녕</h1>
      <p>{num}</p>
      <ColoredMessage color="blue">잘 지내?</ColoredMessage>
      <ColoredMessage color="red">잘 지내지</ColoredMessage>
      <button onClick={xx}>버튼</button>
    </>
  );
}

export default Week5;
