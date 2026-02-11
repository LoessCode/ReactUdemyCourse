import "../../styles/tictactoe/TicTacToe.css"
import {useEffect, useState} from "react";


interface TurnProps
{
  isX: boolean;
  isWinner: boolean;
  isDraw: boolean;
  onClick: () => void;
}


function Turn({isX, isWinner, isDraw, onClick}: TurnProps) {
  const [isFade, setIsFade] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setIsFade(true);
    }, 0);

    setTimeout(() => {
      setIsFade(false);
    }, 100);

  }, [isX, isWinner]);

  const face = isDraw ? "Z " : (isWinner ? (isX ? "O " : "X ") : (isX ? "X " : "O "))
  return (
    <>
      <button className={"game-score "+ (face) + (isWinner ? "W " : " ") + (isFade ? "fade" : "")}
      onClick={onClick}>
      </button>
      <p className={"W"}><b>{ isDraw ? "Draw" : (isWinner ? face+"wins" : isX ? "O" : "X")}</b></p>
    </>
  )
}


export default Turn;