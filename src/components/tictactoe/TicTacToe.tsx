/*
This part of the project wasn't blindly tutorial followed.
 */

import "../../styles/tictactoe/TicTacToe.css"

function TicTacToe()
{
  return (
    <>
      <div className={"game-container"}>
        <div className={"game-square Z"}></div>
        <div className={"game-square X"}></div>
        <div className={"game-square O"}></div>
        <div className={"game-square X"}></div>
        <div className={"game-square O"}></div>
        <div className={"game-square Z"}></div>
        <div className={"game-square X"}></div>
        <div className={"game-square X"}></div>
        <div className={"game-square O"}></div>
      </div>
    </>
  )
}

export default TicTacToe;
