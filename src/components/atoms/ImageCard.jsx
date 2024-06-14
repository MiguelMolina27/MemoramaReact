import "./ImageCard.css";

function ImageCard(props) {
  return (
    <img
      id="img-img__card"
      src={props.img}
      alt="ImageCard"
      onClick={props.OnClick}
    />
  );
}

export default ImageCard;
