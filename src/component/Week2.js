import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import Box from '../component1/Box';

function Week2(props) {

    let n = 0;
    const [n2, setCnt] = useState(0);
    const cnt = () => {
      n=n+1;
      // console.log('카운트 : ',n);
      setCnt(n2+1);
      // console.log('state 카운트', n2);
    }

    return(
        <>
        <Navbar />
        <p>{n} state:{n2}</p>
      <button onClick={cnt}>클릭!</button>

      <Box name="1st"/>
      <Box name="2nd"/>
      <Box name="3rd"/>
        </>
    );
}

export default Week2;