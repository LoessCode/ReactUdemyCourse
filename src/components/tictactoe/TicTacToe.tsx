/*
This part of the project wasn't blindly tutorial followed.
 */

import "../../styles/tictactoe/TicTacToe.css"
import {GameGrid, type squareValue} from "../../data/tictactoe/TicTacToe.ts";
import {useState} from "react";

import Turn from "./Turn.tsx";

const gameGrid = new GameGrid()

function TicTacToe()
{

  console.log(gameGrid)
  console.log("game-square " + gameGrid.cells[0]);

  const [isX, setIsX] = useState(true);
  const [isWinner, setIsWinner] = useState<squareValue>("Z");

  function handleClick(index: number)
  {
    if (gameGrid.getCell(index) === "Z" && isWinner === "Z")
    {
      gameGrid.setCell(index, isX ? "X" : "O");
      setIsX(!isX);
      setIsWinner(gameGrid.checkWin());
    }
  }

  function clearBoard()
  {
    gameGrid.clear();
    setIsX(true);
    setIsWinner("Z");
  }

  return (
    <>
      <Turn isX={isX} isWinner={isWinner !== "Z"} onClick={clearBoard}/>

      <div className={"game-container"}>
        {gameGrid.cells.map(((cell, index) => (
            <button className={"game-square "+cell} onClick={()=>handleClick(index)}></button>
        )))}
      </div>
    </>
  )
}

export default TicTacToe;
