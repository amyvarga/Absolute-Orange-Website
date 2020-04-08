import styled from "styled-components";
import variables from "../../css/variables";

export const Siteheading = styled.div`
  color: ${variables.colors.orange};
  margin: 0;
  line-height: 1.15;
  @media (min-width: ${variables.breakpoints.lg}px) {
    font-size: 2em;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    font-size: 1.5em;
  }
  font-family: "gothic", san-serif;
  float: left;
  transform: translate(-20px);
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
  margin: 0;
`;
