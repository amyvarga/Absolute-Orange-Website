import styled from "styled-components";
import variables from "../../css/variables";

export const Nav = styled.nav`
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

export const Menuli = styled.li`
  :first-child {
    border-left: none;
  }
  :last-child {
    border-right: none;
  }
  border-top: ${(props) =>
    props.selected ? `2px solid ${variables.colors.orange}` : "none"};
  border-bottom: ${(props) => (props.selected ? "none" : `1px solid #FFCFB0`)};
  border-right: ${(props) => (props.selected ? `2px solid #FFCFB0` : "none")};
  border-left: ${(props) => (props.selected ? `2px solid #FFCFB0` : "none")};
  width: ${(props) => `calc(100% / ${props.numTabs})`};
`;

export const Tabs = styled.div`
  background-color: #fff3eb;
  box-shadow: 8px 10px 14px -10px rgba(194, 199, 204, 1);
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: ${(props) => (props.selected ? 1 : -1)};
  transform: ${(props) => `translate(calc(${props.order} * -100%))`};
  background-color: #fff3eb;

  ul {
    list-style-type: none;
    padding: 10px;
    width: 100%;
    flex: 1 0 auto;
  }
`;

export const Tabcontainer = styled.div`
  display: flex;
  border: 1px solid #fff;
  border-top: none;
  z-index: 0;
`;
