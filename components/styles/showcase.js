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
`;

export const HEADER = styled.header`
  display: flex;
  flex-flow: wrap;
  padding: 0;
`;

export const TITLE = styled.title`
  flex: 0 0 100%;
  display: flex;
`;

export const LEFT = styled.div`
  display: flex;
  @media (min-width: ${variables.breakpoints.xxl}px) {
    flex-basis: 60%;
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
    flex-basis: 40%;
  }
  text-align: right;
  li {
    list-style-type: none;
    list-style-position: none;
  }
  a {
    text-decoration: none;
    color: ${variables.colors.blue};
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