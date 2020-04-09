import styled from "styled-components";
import variables from "../../css/variables";

export const Siteheading = styled.div`
  width: 75%;
  color: ${variables.colors.orange};
  margin: 0;
  position: absolute;
  line-height: 1.5em;
  @media (min-width: ${variables.breakpoints.md}px) {
    font-size: 3em;
    left: 10%;
    top: 1%;
  }
  @media (max-width: ${variables.breakpoints.md}px) {
    font-size: 3em;
    left: 13%;
    top: 1%;
  }
  @media (max-width: ${variables.breakpoints.xs}px) {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    font-size: 2.5em;
  }
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
`;

export const Showcaseheading = styled.div`
  font-family: "gothic", san-serif;
  font-size: 1rem;
  margin: 0 0 10px 0;
`;
