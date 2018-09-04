import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledMain = styled.main`
  > div {
    display: flex;
    padding: 50px 30px 30px;
  }
`;

const Main = ({ children }) => (
  <StyledMain>
    <Container>{children}</Container>
  </StyledMain>
);

export default Main;
