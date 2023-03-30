import React from "react";
// import BoxClass from "../component1/BoxClass";
// import CommentList2 from "../component1/CommentList2";
import Navbar from "./Navbar";
import { useState } from "react";
import TodoBoard from "../component1/TodoBoard";


function Week5(props) {

    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const [deleteValue, setDeleteValue] = useState('');
    

    // 추가
    const addItem = () => {
        console.log('inputValue =', inputValue);
        // setInputValue('');
        setTodoList([...todoList, inputValue]);
    }

    // 삭제
    const deleteItem = () => {

    }

    return(
        <>
        <Navbar />

        {/* <h1>TODO List</h1> */}

        <input type='text' value={inputValue} 
        onChange={(event) =>{setInputValue(event.target.value)}} />
        <button onClick={addItem}> 할 일 추가 </button>

        <TodoBoard todoList={todoList} />

        <button onClick={deleteItem}>삭제</button>
        </>
    );
}

export default Week5;