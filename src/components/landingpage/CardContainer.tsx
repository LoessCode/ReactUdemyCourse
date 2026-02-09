import "../../styles/landingpage/card.css"


import Card from "./Card.tsx";
import {CARD_CONTENT} from "../../data/landingpage/CardContainer.ts";


function CardContainer()
{
  return (
    <>
      <div className="cardContainer">
        {CARD_CONTENT.map(card => (<Card txt = {card} />))}
      </div>
    </>
  );
}

export default CardContainer;