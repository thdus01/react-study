import React from "react";
// import "/Box.css";
import "./Box.css";

function Box(props) {
    return (
        <>
        <div className="box1">
            <div className="box2">
            Hello...XXXX<br />
            {props.name}
            </div>
        </div>
        </>
    );
}

export default Box;