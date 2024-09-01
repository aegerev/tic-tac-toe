import React from 'react'
import '../App.css'

function Square(props) {
    return <div className="squareWrapper">{props.value}</div>;
}

export default Square;