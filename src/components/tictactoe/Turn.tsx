import "../../styles/tictactoe/TicTacToe.css"


interface TurnProps
{
  isX: boolean;
  isWinner: boolean;
  onClick: () => void;
}


function Turn({isX, isWinner, onClick}: TurnProps) {
  return (
    <>
      <button className={"game-score "+(isWinner ? (isX ? "O " : "X ") : (isX ? "X " : "O ")) + (isWinner ? "W" : "")}
      onClick={onClick}>

      </button>
    </>
  )
}


export default Turn;