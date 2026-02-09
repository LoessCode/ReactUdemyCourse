import "../styles/card.css"

interface CardProps
{
  txt?: string;
}

function Card({txt}: CardProps)
{
  return (
    <>
      <div className="cardCustom">
        {txt}
      </div>
    </>
  );
}



export default Card;
