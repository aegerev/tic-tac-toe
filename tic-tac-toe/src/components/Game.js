import React, {useState} from 'react';
import '../App.css';
import Square from './Square';

function Game() {
    const [board, setBoard] = useState([
        ["+", "+", "+"],
        ["+", "+", "+"],
        ["+", "+", "+"],
    ]);

    function changeSquareValue(rowIdx, colIdx) {
        const newBoard = [...board];
        newBoard[rowIdx] = [...newBoard[rowIdx]];

        if (newBoard[rowIdx][colIdx] === "+") newBoard[rowIdx][colIdx] = "X";
        else if (newBoard[rowIdx][colIdx] === "X")
            newBoard[rowIdx][colIdx] = "O";
        else newBoard[rowIdx][colIdx] = "X";


        setBoard(newBoard);
    }

    return (
        <div className="gameWrapper">
            {board.map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className="rowWrapper">
                        {row.map((col, colIdx) => {
                            return (
                                <Square
                                   onClick={changeSquareValue.bind(
                                        null,
                                        rowIdx,
                                        colIdx
                                    )}
                                    key={colIdx}
                                    value={col}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}


export default Game;