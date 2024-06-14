import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 30px;
  letter-spacing: -2.4px;
  word-spacing: -2.6px;
  color: #ffffff;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
`;

function Title() {
  return <StyledTitle>Memorama</StyledTitle>;
}

export default Title;
