import Title from "../atoms/Title";
import Button from "../atoms/Button";

import "./Header.css";

function Header(props) {
  return (
    <div id="div-div__header">
      <div id="div-div__title">
        <Title></Title>
      </div>
      <div id="div-div__button">
        <Button OnClick={props.OnClick}></Button>
      </div>
    </div>
  );
}

export default Header;
