import React from 'react'
import '../App.css'

function Square(props) {
    return (
        <div
            className={`squareWrapper ${
                props.value !== "+"
                    ? props.value === "X"
                        ? "redBg"
                        : "blueBg"
                    : ""
            }`}
            onClick={props.onClick}
        >
            {props.value}
        </div>
    );
}

export default Square;