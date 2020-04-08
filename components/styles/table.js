import styled from "styled-components";
import variables from "../../css/variables";

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  font-size: 0.75em;
`;

export const Theader = styled.thead`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  height: 60px;
  h4 {
    margin: 0;
  }
`;

export const Tbody = styled.tbody`
  flex: 1 0 auto;
  padding: 10px;
  border: 1px solid lightgrey;
  border-top: none;
  justify-content: flex-start;
`;
