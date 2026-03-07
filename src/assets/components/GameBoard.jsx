import { useState } from "react";

const inicitalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ turn, handleTurnChange, playerName, gamelog, setGamelog, setLastMove }) {

    const [gameBoard, setGameBoard] = useState(inicitalGameBoard);

    const [gameFineshed, setGameFineshed] = useState(false);

    const [gameWinner, setGameWinner] = useState();

    let onclick = (rowIndex, cellIndex) => {
        if (!gameBoard[rowIndex][cellIndex]) {
            let newGameBoard = [...gameBoard];
            newGameBoard[rowIndex][cellIndex] = turn;
            setGameBoard(newGameBoard);
            handleTurnChange(turn);
            if (checkWinningCondition()) {
                console.log(`Player ${playerName} wins!`);
                // alert(`Player ${playerName} wins!`);
                setGameFineshed(true);
                setGameWinner(playerName);
            }

            let logBoard = newGameBoard.map(row => row.map(cell => cell || " "));
            let lastmove = { rowIndex, cellIndex };

            setGamelog(gamelog => [...gamelog, {
                playerName: playerName,
                board: logBoard,
                turnMark: turn,
                lastmove
            }])
            setLastMove({ rowIndex, cellIndex });
        }
    }

    function isBoardFull() {
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    let checkWinningCondition = () => {

        console.log("| turn: ", turn, " | playerName: ", playerName, " | gamelog: ", gamelog)

        // Check rows
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] === turn) {
                return gameBoard[i][0];
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j] && gameBoard[0][j] === turn) {
                return gameBoard[0][j];
            }
        }

        // Check diagonals
        if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] === turn) {
            return gameBoard[0][0];
        }
        if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] === turn) {
            return gameBoard[0][2];
        }

        return null;
    }

    return (
        <>
            <>
                {gameFineshed && (
                    <div className="game-board" style={{ textAlign: 'center' }}>
                        <h2>Game Finished</h2>
                        <p>Player {gameWinner} wins!</p>
                    </div>
                )}
            </>
            <>
                {!gameFineshed && isBoardFull() && (
                    <div className="game-board" style={{ textAlign: 'center' }}>
                        <h2>Game Finished</h2>
                        <p>It's a draw!</p>
                    </div>
                )}
            </>
            <ol id="game-board" style={{ textAlign: 'center' }}>
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((cell, cellIndex) => (
                                <li key={cellIndex} className="cell">
                                    <button onClick={gameFineshed ? (null) : () => onclick(rowIndex, cellIndex)}>
                                        {cell}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>

        </>
    )
}