import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: auto;
  width: 90vw;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
