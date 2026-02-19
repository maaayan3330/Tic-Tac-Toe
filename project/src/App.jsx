import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
  // manage array of turns
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns); 

  // func for ever we will switch turns
  function handleSelectSquare(row , col) {
    // update the turn
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      // built an object
      const updatedTurns = [{square : {row : row , col: col} , player: currentPlayer},...prevTurns];
      return updatedTurns;
    });
  }

  return (
    // Here I will start the game container : players , gameboard, log
    <main>
      <div id="game-container">
        {/*2 names - so 2 items in order*/}
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="X" isActive={currentPlayer === 'X'}/>
          <Player initialName="player2" symbol="O" isActive={currentPlayer === 'O'}/>
        </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App
