import Card from "../molecules/Card";
import Swal from "sweetalert2";
import { useState } from "react";
import { memorama } from "../../util/dependencies.js";
import "./Cards.css";

function Cards() {
  const cards = memorama.getShuffleCard();
  const [countPair, setCountPair] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = (cardIndex, hide, img) => {
    if (
      selectedCards.length === 2 ||
      selectedCards.some((card) => card.cardIndex === cardIndex)
    ) {
      return;
    }

    const newSelectedCards = [...selectedCards, { cardIndex, hide, img }];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      compareSelectedCards(newSelectedCards);
    }
  };

  const compareSelectedCards = (selectedCards) => {
    if (selectedCards[0].img !== selectedCards[1].img) {
      setTimeout(() => {
        selectedCards.forEach((card) => card.hide());
      }, 1000);
      setSelectedCards([]);
    } else {
      setCountPair(countPair + 1);
      setSelectedCards([]);
      if (countPair == 9) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Ganaste el juego",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  return (
    <div id="div-div__cards">
      {cards.map((card) => (
        <Card
          img={card.getImage()}
          key={card.getIndex()}
          index={card.getIndex()}
          click={handleClick}
        />
      ))}
    </div>
  );
}

export default Cards;
