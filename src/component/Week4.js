import React from "react";
import Clock from "../component1/Clock";
import CommentList from "../component1/CommentList";
import BoxClass from "../component1/BoxClass";
import CommentList2 from "../component1/CommentList2";
import Navbar from "./Navbar";

function Week4(props) {
    
    return(
        <>
        <Navbar />
        <Clock />
        <CommentList />

        <hr />

        <CommentList2 />
        <hr />
        <BoxClass name="홍길동" />
        <BoxClass name="Mike" />
        <BoxClass name="유재석" />
        </>
    );
}

export default Week4;