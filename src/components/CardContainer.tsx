import "../styles/card.css"


import Card from "./Card.tsx";

function CardContainer()
{
  return (
    <>
      <div className="cardContainer">
        <Card txt="This is a card"/>
        <Card txt="This is the second card" />
        <Card txt="This is the third card"/>
      </div>
    </>
  );
}

export default CardContainer;