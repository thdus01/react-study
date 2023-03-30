import React from "react";

function Clock(props) {
    
    
    return(
        <>
        <h1>안녕!</h1>
        <h2>현재 시각: {new Date().toLocaleDateString}</h2>
        </>
    );
}

export default Clock;