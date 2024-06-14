import { useState } from "react";
import ImageCard from "../atoms/ImageCard";
import "./Card.css";

function Card(props) {
  const estadoInicial = {
    fliped: false,
    image: "public/back.jpg"
  };

  const [fliped, setFliped] = useState(estadoInicial.fliped);
  const [image, setImage] = useState(estadoInicial.image);

  const handleClick = () => {
    props.click(props.index, hide, props.img);
    
    if (!fliped) {
      setFliped(true);
      setImage(props.img);
    } else {
      setFliped(false);
      setImage(estadoInicial.image);
    }
  };

  const hide = () => {
    setFliped(estadoInicial.fliped);
    setImage(estadoInicial.image);
  };

  return (
    <div id="div-div__card">
      <ImageCard OnClick={handleClick} img={image}></ImageCard>
    </div>
  );
}

export default Card;
