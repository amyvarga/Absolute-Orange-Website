import styled from "styled-components";
import variables from "../../css/variables";

export const H1 = styled.h1`
  color: ${variables.colors.orange};
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  font-family: "gothic", san-serif;
  a {
    color: ${variables.colors.orange};
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position-x: 52.5%;
  height: 160px;
  background-position-y: 40px;
  overflow-x: visible;
`;