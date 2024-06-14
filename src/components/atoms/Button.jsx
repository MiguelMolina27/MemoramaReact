import styled from "styled-components";

const StyledButton = styled.button`
  -webkit-border-radius: 2;
  -moz-border-radius: 2;
  border-radius: 2px;
  font-family: Arial;
  color: #fcfcfc;
  font-size: 21px;
  background: #3473d9;
  padding: 2px 6px 4px 5px;
  text-decoration: none;

  &:hover {
    background: #3cb0fd;
    text-decoration: none;
  }
`;

function Button(props) {
  return <StyledButton onClick={props.OnClick}>Reset</StyledButton>;
}

export default Button;
