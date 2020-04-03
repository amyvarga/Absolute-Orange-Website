import styled from "styled-components";
import variables from "../../css/variables";

export const OL = styled.ol`
  list-style-type: none;
  padding-left: 0;
  width: 70%;
  margin: 0 auto;
`;
export const LI = styled.li`
  padding: 10px;
  border: solid 1px #beb9ba;
  border-radius: 5px 5px 5px 5px;
  background-color: #eef3f6;
`;

export const HEADER = styled.header`
  display: flex;
  flex-flow: wrap;
  padding: 0;
  margin-bottom: 10px;
`;

export const TITLE = styled.title`
  flex: 0 0 100%;
  display: flex;
  margin-bottom: 10px;
  h2 {
    font-size: 1em;
    margin: 0;
  }
  strong {
    text-transform: uppercase;
  }
`;

export const LEFT = styled.div`
  display: flex;
  @media (min-width: ${variables.breakpoints.xxl}px) {
    width: 60%;
  }
  .logo {
    @media (min-width: ${variables.breakpoints.xxl}px) {
      width: 40%;
      float: left;
    }
    img {
      width: 95%;
    }
  }
`;

export const RIGHT = styled.div`
  @media (min-width: ${variables.breakpoints.xxl}px) {
    width: 40%;
  }
  text-align: right;
  li {
    list-style-type: none;
    list-style-position: none;
  }
  a {
    text-decoration: none;
    color: ${variables.colors.darkBlue};
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const MAIN = styled.main`
  strong {
    font-weight: bold;
  }
`;

export const TABS = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: 8px 10px 14px -10px rgba(194, 199, 204, 1);
`;

export const TAB = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px;
  display: ${props => (props.selected ? "block" : "none")};

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const NAV = styled.nav`
  width: 100%;
  h4 {
    margin: 10px;
  }
  ol {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
`;

export const MENULI = styled.li`
  border-top: ${props =>
    props.selected ? `2px solid ${variables.colors.medBlue}` : "none"};
  border-bottom: ${props =>
    props.selected ? "none" : `1px solid ${variables.colors.lightBlue}`};
  border-right: ${props =>
    props.selected ? `1px solid ${variables.colors.lightBlue}` : "none"};
  border-left: ${props =>
    props.selected ? `1px solid ${variables.colors.lightBlue}` : "none"};
  @media (min-width: ${variables.breakpoints.xxl}px) {
    width: 16.5%;
  }
`;
