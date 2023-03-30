import React from "react";
import Comment from "./Comment";
import logo from '.././logo.svg';

// function CommentList(props) {
//     return(
//         <>
//         <Comment name="세종대왕" comment="안녕"/>
//       <Comment name="바이든" comment="Hello"/>
//       <Comment name="강호동" comment="리액트 공부하자" />
//         </>
//     );
// }

const CommentList = () => {
  return(
    <>
    <div>
      <Comment name="세종대왕" comment="안녕"/>
      <Comment name="바이든" comment="Hello"/>
      <Comment name="강호동" comment="리액트 공부하자" />
      </div>
    </>
  );
}

export default CommentList;