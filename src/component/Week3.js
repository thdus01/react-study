import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import Box from '../component1/Box';

function Week3(props) {
    let n = 0;
    const [n2, setCnt] = useState(0);
    const cnt = () => {
      n=n+1;
      // console.log('카운트 : ',n);
      setCnt(n2+1);
      // console.log('state 카운트', n2);
    }
    const [cnt2, setCnt2] = useState(0);
const cc = () => {
  setCnt2(cnt2+1);
  document.title=cnt2;  // 브라우저 제목
  console.log("카운트..." , cnt2);
}
    return(
        <>
        <Navbar />
        <button onClick={cc}>클릭</button>
        <p>{cnt2}번 클릭했습니다.</p>
        <Box name="AI개론(1)"/>
        <Box name="React(2)"/>
        <Box name="HTML(3)"/>
        </>
    );
}

export default Week3;