import styled from "styled-components";
import variables from "../../css/variables";

export const Header = styled.header`
  width: 100%;
  @media (min-width: ${variables.breakpoints.lg}px) {
    padding: ${(props) => (props.major ? "20px 0 0 0" : "0")};
  }
  margin: 0 auto;
  display: flex;
  padding: 10px;
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
    margin: 40px 0;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    margin: 20px 0;
  }
`;

export const Logocontainer = styled.div`
  @media (min-width: ${variables.breakpoints.lg}px) {
    height: 75px;
    width: 75px;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    height: 60px;
    width: 60px;
  }

  float: left;
  margin-top: 10px;
`;
