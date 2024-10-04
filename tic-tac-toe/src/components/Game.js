import React, {useState} from 'react';
import '../App.css';
import Square from './Square';

function Game() {
    const [currentUser, setCurrentUser] = useState("X")

    
    const [board, setBoard] = useState([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]);

    function refreshPage() {

        window.location.reload(false);
    }

    function checkWinner(board, rowIdx, colIdx) {
        const currentSymbol = board[rowIdx][colIdx];
        let bReset = false;
        // check the row
        if (
            board[rowIdx][0] === currentSymbol &&
            board[rowIdx][1] === currentSymbol &&
            board[rowIdx][2] === currentSymbol
        ) {
            bReset = true;
        }

        // check the column
        if (
            board[0][colIdx] === currentSymbol &&
            board[1][colIdx] === currentSymbol &&
            board[2][colIdx] === currentSymbol
        ) {
            bReset = true; 
        }
            
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
        ) {
            bReset = true;
        }
        if(bReset) {   
            alert(`${board[rowIdx][colIdx]} is the winner`); 
            resetBoard(); 
            setBoard(board);  
            refreshPage(); 
        }
        
    }


    function resetBoard() {
        setBoard([
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]);
        
    }



    function changeSquareValue(rowIdx, colIdx) {
        const newBoard = [...board];
        newBoard[rowIdx] = [...newBoard[rowIdx]];

        if(newBoard[rowIdx][colIdx] === "X" || newBoard[rowIdx][colIdx] === "O") {
            return;
        }

    //     if(currentUser === "X") {
    //         newBoard[rowIdx][colIdx] = "X";
    //         setCurrentUser("O");
    //     } else {
    //         newBoard[rowIdx][colIdx] = "O";
    //         setCurrentUser("X");
    //     }

    //     checkWinner(newBoard, rowIdx, colIdx);
    //     setBoard(newBoard);
    // }
        let bUseState = true;
        

        if(bUseState) {
            if(currentUser === "X") {
                newBoard[rowIdx][colIdx] = "X";
                setCurrentUser("O");
            } else {
                newBoard[rowIdx][colIdx] = "O";
                setCurrentUser("X");   
            }

        } else {
            if (newBoard[rowIdx][colIdx] === "+") {
                    newBoard[rowIdx][colIdx] = "X";
            } else if (newBoard[rowIdx][colIdx] === "X") {
                    newBoard[rowIdx][colIdx] = "O";
             } else {
                    newBoard[rowIdx][colIdx] = "X";
        }
    }
        checkWinner(newBoard, rowIdx, colIdx);
        setBoard(newBoard);
        //resetBoard();
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
