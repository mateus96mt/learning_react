
import Player from "./assets/components/Player"
import GameBoard from "./assets/components/GameBoard"
import Log from "./assets/components/Log"
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [turn, setTurn] = useState('X');

  let [playerName1, setPlayerName1] = useState("Player 1")
  let [playerSymbol1, setPlayerSymbol1] = useState("X")

  let [playerName2, setPlayerName2] = useState("Player 2")
  let [playerSymbol2, setPlayerSymbol2] = useState("O")

  let playerName = turn === playerSymbol1 ? playerName1 : playerName2;
  let [lastmove, setLastMove] = useState();

  let [gamelog, setGamelog] = useState([]);

  let handleTurnChange = (turn) => {
    setTurn(() => turn === playerSymbol1 ? playerSymbol2 : playerSymbol1);
  }

  useEffect(() => {
    setTurn(playerSymbol1);
  }, [playerSymbol1]);

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            playerName={playerName1}
            playerSymbol={playerSymbol1}
            usePrompt={true} setPlayerName={setPlayerName1}
            setPlayerSymbol={setPlayerSymbol1}
          />
          <Player
            playerName={playerName2}
            playerSymbol={playerSymbol2}
            usePrompt={true}
            setPlayerName={setPlayerName2}
            setPlayerSymbol={setPlayerSymbol2}
          />
        </ol>
        <GameBoard
          turn={turn}
          handleTurnChange={handleTurnChange}
          playerName={playerName}
          gamelog={gamelog}
          setGamelog={setGamelog}
          setLastMove={setLastMove}
        />
      </div>
      <Log gamelog={gamelog}
      lastmove={lastmove}
      />
    </main>
  )
}

export default App
