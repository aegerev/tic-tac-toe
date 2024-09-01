import React, {useState} from 'react';
import '../App.css';
import Square from './Square';

function Game() {
    const [board, setBoard] = useState([
        ["+", "+", "+"],
        ["+", "+", "+"],
        ["+", "+", "+"],
    ]);

    function checkWinner(board, rowIdx, colIdx) {
        const currentSymbol = board[rowIdx][colIdx];

        // check that row
        if (
            board[rowIdx][0] === currentSymbol &&
            board[rowIdx][1] === currentSymbol &&
            board[rowIdx][2] === currentSymbol
        )
            console.log(`${board[rowIdx][colIdx]} is the winner`);

        // check that column
        if (
            board[0][colIdx] === currentSymbol &&
            board[1][colIdx] === currentSymbol &&
            board[2][colIdx] === currentSymbol
        )
            console.log(`${board[rowIdx][colIdx]} is the winner`);

        // check diagonals
        if (
            (rowIdx === colIdx &&
                board[0][0] === currentSymbol &&
                board[1][1] === currentSymbol &&
                board[2][2] === currentSymbol) ||
            (rowIdx + colIdx === 2 &&
                board[0][2] === currentSymbol &&
                board[1][1] === currentSymbol &&
                board[2][0] === currentSymbol)
        )
            console.log(`${board[rowIdx][colIdx]} is the winner`);
    }

    function changeSquareValue(rowIdx, colIdx) {
        const newBoard = [...board];
        newBoard[rowIdx] = [...newBoard[rowIdx]];

        if (newBoard[rowIdx][colIdx] === "+") newBoard[rowIdx][colIdx] = "X";
        else if (newBoard[rowIdx][colIdx] === "X")
            newBoard[rowIdx][colIdx] = "O";
        else newBoard[rowIdx][colIdx] = "X";

        checkWinner(newBoard, rowIdx, colIdx);
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