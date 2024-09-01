import React, {useState} from 'react';
import '../App.css';
import Square from './Square';

function Game() {
    const [board, setBoard] = useState([
        ["+", "+", "+"],
        ["+", "+", "+"],
        ["+", "+", "+"],
    ]);

    return (
        <div className="gameWrapper">
            {board.map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className="rowWrapper">
                        {row.map((col, colIdx) => {
                            return <Square key={colIdx} value={col} />;
                        })}
                    </div>
                );
            })}
        </div>
    );
}


export default Game;