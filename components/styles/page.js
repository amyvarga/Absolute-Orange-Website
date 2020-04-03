import styled from "styled-components";

export const HEADER = styled.header`
  padding: ${props => (props.major ? "2em 0" : "0")};
`;

export const FOOTER = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "gothic", san-serif;
`;

export const CONTAINER = styled.div`
  min-height: 
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SECTION = styled.section`
  width: 100%;
`;
