import styled from "styled-components";
import variables from "../../css/variables";

export const OL = styled.ol`
  list-style-type: none;
  padding-left: 0;
  @media (min-width: ${variables.breakpoints.lg}px) {
    width: 70%;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    width: 90%;
  }
  margin: 0 auto;
`;
export const LI = styled.li`
  padding: 10px;
  border: solid 1px lightgrey;
  background-color: #fff;
`;

export const HEADER = styled.header`
  display: flex;
  flex-flow: wrap;
  padding: 0;
  margin-bottom: 10px;
  @media (max-width: ${variables.breakpoints.xxs}px) {
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  width: 75%;
  @media (max-width: ${variables.breakpoints.xxs}px) {
    width: 100%;
  }
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    list-style-position: none;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Right = styled.div`
  width: 25%;
  @media (max-width: ${variables.breakpoints.xxs}px) {
    width: 100%;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    @media (max-width: ${variables.breakpoints.xxs}px) {
      width: 50%;
      float: right;
    }
  }
`;

export const MAIN = styled.main`
  display: grid;
  grid-auto-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: ${variables.breakpoints.lg}px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: ${variables.breakpoints.xs}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${variables.breakpoints.xs}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${variables.breakpoints.xxs}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -10px;
    margin-right: -10px;
    > * {
      margin-top: 10px;
    }
  }
`;
