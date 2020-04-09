import styled from "styled-components";
import variables from "../../css/variables";

export const Header = styled.header`
  width: 100%;
  @media (min-width: ${variables.breakpoints.md}px) {
    padding: ${(props) => (props.major ? "10px 10px 0 10px" : "0")};
  }
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const TitleLink = styled.a`
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid ${variables.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "gothic", san-serif;
  font-size: 0.75em;
  @media (min-width: ${variables.breakpoints.lg}px) {
    padding: 20px 0;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    padding: 10px 0;
  }
  color: ${variables.colors.grey};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  @media (min-width: ${variables.breakpoints.lg}px) {
    margin: 20px 0;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    margin: 10px 0;
  }
`;

export const Logocontainer = styled.div`
  @media (min-width: ${variables.breakpoints.md}px) {
    width: 15%;
  }
  @media (max-width: ${variables.breakpoints.md}px) {
    width: 18%;
  }
  @media (max-width: ${variables.breakpoints.xs}px) {
    width: 0%;
  }
  float: left;
  margin-top: 10px;
`;
