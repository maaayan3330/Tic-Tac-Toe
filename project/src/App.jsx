import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer , setActivePlayer] = useState('X');
  // manage array of turns
  const [gameTurns, setGameTurns] = useState([]);

  // func for ever we will switch turns
  function handleSelectSquare(row , col) {
    // update the turn
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
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
          <Player initialName="player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App
