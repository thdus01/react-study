import React from "react";
import Comment from "./Comment";

const comments = [
    {
      name: "세종대왕",
      comment: "안녕"
    },
    {
      name: "바이든",
      comment: "Hello"
    },
    {
      name: "강호동",
      comment: "리액트 공부하자"
    },
    {
        name: "유재석",
        comment: "자바 공부!!"
      },
  ];

  const CommentList2 = () => {
    return(
        <>
        <div>
            {comments.map((comments) => {
                return (
                    <Comment name={comments.name} comment={comments.comment} />
                );
            })}
        </div>
        </>
    );
  }

  export default CommentList2;