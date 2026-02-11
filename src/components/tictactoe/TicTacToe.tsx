/*
This part of the project wasn't blindly tutorial followed.
 */

import "../../styles/tictactoe/TicTacToe.css"
import {GameGrid} from "../../data/tictactoe/TicTacToe.ts";
import {useState} from "react";

import Turn from "./Turn.tsx";

function TicTacToe()
{

  const [gameGrid, setGameGrid] = useState<GameGrid>(new GameGrid());

  let numberOfZ = 0;
  gameGrid.cells.forEach(value => {
    if (value === "Z") numberOfZ += 1;
  });
  const isX: boolean = !(numberOfZ % 2)
  const isWinner = gameGrid.checkWin();


  function handleClick(index: number)
  {
    if (gameGrid.getCell(index) === "Z" && isWinner === "Z")
    {
      setGameGrid(gameGrid.setCell(index, isX ? "X" : "O"));
    }
  }

  function clearBoard()
  {
    setGameGrid(new GameGrid());
  }

  return (
    <>
      <Turn isX={isX} isWinner={isWinner !== "Z"} isDraw={numberOfZ === 0 && isWinner === "Z"} onClick={clearBoard}/>

      <div className={"game-container"}>
        {gameGrid.cells.map(((cell, index) => (
            <button className={"game-square "+cell} onClick={()=>handleClick(index)}></button>
        )))}
      </div>
    </>
  )
}

export default TicTacToe;
