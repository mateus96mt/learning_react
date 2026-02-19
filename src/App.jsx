
import Player from "./assets/components/Player"
import GameBoard from "./assets/components/GameBoard"
import Log from "./assets/components/Log"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" usePrompt={true} />
          <Player name="Player 2" symbol="O" usePrompt={false} />
        </ol>
        <GameBoard />
      </div>
      <Log />
    </main>
  )
}

export default App
